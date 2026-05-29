import mongoose from 'mongoose';
import { MONGO_URI } from './environment-variables.js';

const pool = async () => {
    await mongoose.connect(MONGO_URI)
    return mongoose.connection
}

export default pool
