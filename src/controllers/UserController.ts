/**
 * @file Dispatcher for user related requests.
 * @author Ivan Kockarevic
 */
import express from 'express';
import UserService from '../services/UserService';

class UserController {
    public getAll(req: express.Request, res: express.Response) {
        UserService.getAll()
            .then((users: []) => res.send({
                data: users,
                success: true,
            }))
            .catch((errorMessage: string) => res.send({
                message: errorMessage,
                success: false,
            }));
    }

    public get(req: express.Request, res: express.Response) {
        UserService.get(req.params.id)
            .then((user: any) => res.send({
                data: user,
                success: true,
            }))
            .catch((errorMessage: string) => res.send({
                message: errorMessage,
                success: false,
            }));
    }

    public create(req: express.Request, res: express.Response) {
        UserService.create({
            email: req.body.email,
            fullName: req.body.fullName,
            password: req.body.password,
            refreshToken: req.body.refreshToken,
            role: req.body.role,
        })
            .then((user: any) => res.send({
                data: user,
                success: true,
            }))
            .catch((errorMessage: string) => res.send({
                message: errorMessage,
                success: false,
            }));
    }

    public update(req: express.Request, res: express.Response) {
        UserService.update({
            email: req.body.email,
            fullName: req.body.fullName,
            id: req.params.id,
            password: req.body.password,
            refreshToken: req.body.refreshToken,
            role: req.body.role,
        })
            .then((user: any) => res.send({
                data: user,
                success: true,
            }))
            .catch((errorMessage: string) => res.send({
                message: errorMessage,
                success: false,
            }));
    }

    public delete(req: express.Request, res: express.Response) {
        UserService.delete(req.params.id)
            .then(() => res.send({
                success: true,
            }))
            .catch((errorMessage: string) => res.send({
                message: errorMessage,
                success: false,
            }));
    }
}

export default new UserController();
