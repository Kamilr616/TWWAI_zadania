import mongoose, { Schema, Document } from 'mongoose';

interface IData extends Document {
    pressure: string;
    temperature: string;
    humidity: string;
    date: string;
}

const DataSchema: Schema = new Schema({
    pressure: { type: String, required: true },
    temperature: { type: String, required: true },
    humidity: { type: String, required: true },
    date: { type: Date, required: true },
});

const DataModel = mongoose.model<IData>('Data', DataSchema);

export default DataModel;
