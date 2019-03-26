/**
 * @file Defines all authentication related business logic.
 * @author Ivan Kockarevic
 */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import config from '../config';
import UserService from './UserService';

class AuthenticationService {
    /**
     * Generates a JWT token, based on the provided login data.
     * @param email Email of the user that requests the token.
     * @param password Password of the user that requests the token.
     */
    public generateToken(email: string, password: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (!email) return reject('Email is required.');
            if (!password) return reject('Password is required.');

            UserService.getByEmail(email).then((user: any) => {
                if (!user) return reject('User not found.');

                bcrypt.hash(password, user.salt, (hashError, hash) => {
                    if (hashError) return reject('Hash error.');
                    if (hash !== user.password) return reject('Passwords don\'t match.');

                    const accessToken = jwt.sign({
                        data: {
                            email: user.email,
                            expiresAt: new Date().getTime() + config.tokenExpirySeconds,
                            fullName: user.fullName,
                        },
                    }, config.secret, { expiresIn: config.tokenExpirySeconds });

                    resolve(accessToken);
                });
            }).catch((error: string) => reject(error));
        });
    }

    /**
     * Refreshes the token by provided refresh token.
     * @param refreshToken Refresh token for the user that needs to refresh the token.
     */
    public refreshToken(refreshToken: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            if (!refreshToken) return reject('Email is required.');

            UserService.getByRefreshToken(refreshToken).then((user: any) => {
                if (!user) return reject('User not found.');

                const accessToken = jwt.sign({
                    data: {
                        email: user.email,
                        expiresAt: new Date().getTime() + config.tokenExpirySeconds,
                        fullName: user.fullName,
                    },
                }, config.secret, { expiresIn: config.tokenExpirySeconds });

                resolve(accessToken);
            }).catch((error: string) => reject(error));
        });
    }
}

export default new AuthenticationService();
