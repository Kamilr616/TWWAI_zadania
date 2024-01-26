import mongoose, { Schema, Document } from 'mongoose';

interface IPost extends Document {
    title: string;
    text: string;
    image: string;
}

const PostSchema: Schema = new Schema({
        title: { type: String, required: true },
        text: { type: String, required: true },
        image: { type: String, required: true },
});

const PostModel = mongoose.model<IPost>('Post', PostSchema);

export default PostModel;
