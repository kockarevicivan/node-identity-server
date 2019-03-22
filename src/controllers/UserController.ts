/**
 * @file Dispatcher for user related requests.
 * @author Ivan Kockarevic
 */
import UserService from '../services/UserService';

class UserController {
    public getAll(req: any, res: any) {
        UserService.getAll()
        .then((users: []) => res.send(users))
        .catch((error: any) => res.send('error'));
    }

    public get(req: any, res: any) {
        UserService.get(req.params.id)
        .then((user: any) => res.send(user))
        .catch((error: any) => res.send('error'));
    }

    public create(req: any, res: any) {
        UserService.create({
            email: req.body.email,
            fullName: req.body.fullName,
            password: req.body.password,
            refreshToken: req.body.refreshToken,
            role: req.body.role,
        })
        .then((user: any) => res.send(user))
        .catch((error: any) => res.send('error'));
    }

    public update(req: any, res: any) {
        UserService.update({
            email: req.body.email,
            fullName: req.body.fullName,
            id: req.params.id,
            password: req.body.password,
            refreshToken: req.body.refreshToken,
            role: req.body.role,
        })
        .then((user: any) => res.send(user))
        .catch((error: any) => res.send('error'));
    }

    public delete(req: any, res: any) {
        UserService.delete(req.params.id)
        .then(() => res.send('deleted'))
        .catch((error: any) => res.send('error'));
    }
}

export default new UserController();
