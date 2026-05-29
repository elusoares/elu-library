import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    ano_publicacao: { type: Number, required: true },
    is_favorite: { type: Boolean, required: false }
}, { versionKey: false })

const Books = mongoose.model('Books', BookSchema, 'Books')

export default Books    