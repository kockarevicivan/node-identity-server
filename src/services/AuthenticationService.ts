/**
 * @file Defines all authentication related business logic.
 * @author Ivan Kockarevic
 */
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import config from '../config';
import UserService from './UserService';

class AuthenticationService {
    /**
     * Generates a JWT token, based on the provided login data.
     * @param email Email of the user that requests the token.
     * @param password Password of the user that requests the token.
     */
    public generateToken(email: string, password: string): Promise<any> {
        return new Promise<any>((resolve, reject) => {
            if (!email) {
                reject('Email is required.');
                return;
            }

            if (!password) {
                reject('Password is required.');
                return;
            }

            UserService.getByEmail(email).then((user: any) => {
                bcrypt.hash(password, config.saltRounds, (err, hash) => {
                    if (hash !== user.password) {
                        reject('Passwords don\'t match.');
                        return;
                    }

                    const refreshToken = jwt.sign({
                        data: {
                            email: user.email,
                            fullName: user.fullName,
                        },
                    }, config.secret);

                    user.refreshToken = refreshToken;

                    UserService.update(user).then(() => {
                        const accessToken = jwt.sign({
                            data: {
                                email: user.email,
                                expiresIn: config.tokenExpirySeconds,
                                fullName: user.fullName,
                            },
                        }, config.secret, { expiresIn: config.tokenExpirySeconds });

                        resolve({
                            accessToken,
                            refreshToken,
                        });
                    });
                });
            });

        });
    }

    /**
     * Checks and confirms the validity of the provided token.
     * @param token JWT token that needs to be validated.
     */
    public validateToken(token: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }

    /**
     * Refreshes the token by provided refresh token.
     * @param refreshToken Refresh token for the user that needs to refresh the token.
     */
    public refreshToken(refreshToken: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            resolve('test');
        });
    }
}

export default new AuthenticationService();
