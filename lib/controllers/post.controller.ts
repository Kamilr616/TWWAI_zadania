import Controller from '../interfaces/controller.interface';
import { Request, Response, NextFunction, Router } from 'express';
import PostModel from "../models/PostModel";

class PostController implements Controller {
    public path = '/api/posts';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get(this.path, this.getPosts);
        this.router.post(this.path, this.createPost);
    }
    private createPost = async (request: Request, response: Response) => {
        const { title, text, image } = request.body;

        try {
            const newPost = new PostModel({ title, text, image });
            await newPost.save();
            response.status(201).json(newPost);
        } catch (error) {
            console.error('Error:', error);
            response.status(500).json({ error: 'Error occurred' });
        }
    };

    private getPosts = async (request: Request, response: Response) => {
        // Tutaj dodaj logikę pobierania obiektów postów z bazy danych
        try {
            // Przykładowa odpowiedź z obiektami postów (możesz dostosować do swojej bazy danych)
            const posts = [
                { id: 1, title: 'Post 1', content: 'Treść posta 1' },
                { id: 2, title: 'Post 2', content: 'Treść posta 2' },
            ];

            // Odpowiedź JSON z obiektami postów
            response.json(posts);
        } catch (error) {
// Obsługa błędów
            console.error('Błąd podczas pobierania postów:', error);
            response.status(500).json({ error: 'Wystąpił błąd podczas pobierania postów' });
        }
    };
}

export default PostController;
