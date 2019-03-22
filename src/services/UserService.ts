/**
 * @file Defines all user related business logic.
 * @author Ivan Kockarevic
 */
import bcrypt from 'bcryptjs';
import { Document } from 'mongoose';

import config from '../config';
import User from '../models/User';

class UserService {
    /**
     * Returns an array containing all users inside the db collection.
     */
    public getAll(): Promise<Document[]> {
        return new Promise<Document[]>((resolve, reject) => {
            User.find()
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    /**
     * Returns a document containing data of the requested user.
     * @param id Id of the wanted user.
     */
    public get(id: string): Promise<Document> {
        return new Promise<Document>((resolve, reject) => {
            User.findOne({ _id: id })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    /**
     * Returns a document containing data of the requested user.
     * @param email Email of the wanted user.
     */
    public getByEmail(email: string): Promise<Document> {
        return new Promise<Document>((resolve, reject) => {
            User.findOne({ email })
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        });
    }

    /**
     * Inserts a user into database.
     * @param user User that needs to be inserted.
     */
    public create(user: any): Promise<Document> {
        return new Promise<Document>((resolve, reject) => {
            bcrypt.hash(user.password, config.saltRounds, (err, hash) => {
                user.password = hash;

                User.create(user)
                .then((data) => resolve(data))
                .catch((error) => reject(error));
            });
        });
    }

    /**
     * Updates all the data for the provided user.
     * @param user User object with new data applied.
     */
    public update(user: any): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            if (user.password) {
                bcrypt.hash(user.password, config.saltRounds, (err, hash) => {
                    user.password = hash;

                    User.updateOne({ _id: user.id }, { $set: user }, { multi: true })
                    .then((data) => resolve(user))
                    .catch((error) => reject(error));
                });
            } else {
                User.updateOne({ _id: user.id }, { $set: user }, { multi: true })
                .then((data) => resolve(user))
                .catch((error) => reject(error));
            }
        });
    }

    /**
     * Removes a specific user from the db collection.
     * @param id Id of the user that needs to be removed.
     */
    public delete(id: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            User.findByIdAndRemove(id)
            .then((data) => resolve())
            .catch((error) => reject(error));
        });
    }
}

export default new UserService();
