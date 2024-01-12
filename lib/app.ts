import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import Controller from './interfaces/controller.interface';
import ChatController from './controllers/chat.controller';
import { config } from './config'
import mongoose from 'mongoose';
import cors from 'cors';
import http from 'http';
import { Server } from 'socket.io';

class App {
  public app: express.Application;
  private httpServer: http.Server;
  private io: Server;

  constructor(controllers: Controller[]) {
    this.app = express();
    this.httpServer = http.createServer(this.app);
    this.io = new Server(this.httpServer, {
      cors: {
        origin: 'http://localhost:5173',
        methods: ['GET', 'POST'],
      },
    });

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.connectToDatabase();
    this.initializeSockets();

  }
  private initializeSockets(): void {
    console.log('Sockets work');

    const chatController = new ChatController(this.io);
    chatController.initializeRoutes(this.app);
  }

  public listen(): void {
    this.httpServer.listen(config.port, () => {
      console.log(`App listening on the port ${config.port}`);
    });

  }
  private connectToDatabase(): void {
    mongoose.connect(config.databaseUrl);

    const db = mongoose.connection;

    db.on('error', (error: any) => {
      console.error('Error connection - MongoDB:', error);
    });
    db.once('open', () => {
      console.log('Connect with database established');
    });
  }


  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use(morgan('dev'));
    this.app.use(cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
      credentials: true,
      optionsSuccessStatus: 204,
      allowedHeaders: 'Content-Type,Authorization',
    }));
    this.app.use(express.static("'../../../build"));
  }

  private initializeControllers(controllers: Controller[]): void {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
}
export default App;
