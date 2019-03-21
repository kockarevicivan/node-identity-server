/**
 * @file Defines all user related business logic.
 * @author Ivan Kockarevic
 */
import { Document } from 'mongoose';

import User from '../models/User';

class UserService {
    public getAll(): Promise<Document[]> {
        return new Promise<Document[]>((resolve, reject) => {
            User.find()
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    public get(id: string): Promise<Document> {
        return new Promise<Document>((resolve, reject) => {
            User.findOne({ _id: id })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    public create(user: any): Promise<Document> {
        return new Promise<Document>((resolve, reject) => {
            User.create(user)
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    public update(user: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            User.update({ _id: user.id }, { $set: user }, { multi: true })
            .then((data) => resolve(user))
            .catch((error) => reject(error));
        });
    }

    public delete(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            User.findByIdAndRemove(id)
            .then((data) => resolve())
            .catch((error) => reject(error));
        });
    }
}

export default new UserService();
