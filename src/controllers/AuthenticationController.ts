/**
 * @file Dispatcher for authentication related requests.
 * @author Ivan Kockarevic
 */
import express from 'express';
import AuthenticationService from '../services/AuthenticationService';

class AuthenticationController {
    public generateToken(req: express.Request, res: express.Response) {
        AuthenticationService.generateToken(req.body.email, req.body.password)
            .then((accessToken: string) => res.send({
                data: accessToken,
                success: true,
            }))
            .catch((errorMessage: string) => res.send({
                message: errorMessage,
                success: false,
            }));
    }

    public refreshToken(req: express.Request, res: express.Response) {
        AuthenticationService.refreshToken(req.params.token)
            .then((accessToken: string) => res.send({
                data: accessToken,
                success: true,
            }))
            .catch((errorMessage: string) => res.send({
                message: errorMessage,
                success: false,
            }));
    }
}

export default new AuthenticationController();
