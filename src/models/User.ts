/**
 * @file Defines a schema for the user collection.
 * @author Ivan Kockarevic
 */
import mongoose from 'mongoose';

import { transform } from '../utils/transform';

export default mongoose.model('user', new mongoose.Schema({
    email: String,
    fullName: String,
    password: String,
    role: String,
    token: String,
}, {
    timestamps: true,
    toJSON: { transform },
}));
