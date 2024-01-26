import bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import Controller from './interfaces/controller.interface';
import PostModel from "./models/PostModel";
import { config } from './config';
import mongoose from 'mongoose';
import * as http from 'http';
import path from 'path';

class App {
    public app: express.Application;
    private httpServer: http.Server;

    constructor(controllers: Controller[]) {
        this.app = express();
        this.httpServer = http.createServer(this.app);

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.connectToDatabase();
    }

    public listen(): void {
        this.httpServer.listen(config.port, () => {
            console.log(`App listening on the port ${config.port}`);
        });
    }

    private initializeMiddlewares(): void {
        this.app.use(bodyParser.json());
        this.app.use(morgan('dev'));
        this.app.use(
            cors({
                origin: '*',
                methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
                credentials: true,
                optionsSuccessStatus: 204,
                allowedHeaders: 'Content-Type,Authorization',
            })
        );
        this.app.use(express.static("'../../../build"));
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach((controller) => {
            this.app.use('/', controller.router);
        });
        this.app.get('/posts', this.getPosts);
    }

    private serveStaticFiles(): void { // Add this method
        this.app.use(express.static(path.join(__dirname, '../../../build')));
    }

    private getPosts = async (req: express.Request, res: express.Response) => {
        try {
            const posts = await PostModel.find();
            res.render('posts', { posts });
        } catch (error) {
            console.error('Error while fetching posts:', error);
            res.status(500).json({ error: 'An error occurred while fetching posts' });
        }
    }

    private connectToDatabase(): void {
        mongoose.connect(config.databaseUrl);

        const db = mongoose.connection;

        db.on('error', (error: any) => {
            console.error('Error connecting to MongoDB:', error);
        });

        db.once('open', () => {
            console.log('Connection with the database established');
        });
    }

}

export default App;
