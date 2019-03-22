/**
 * @file Dispatcher for authentication related requests.
 * @author Ivan Kockarevic
 */
import AuthenticationService from '../services/AuthenticationService';

class AuthenticationController {
    public generateToken(req: any, res: any) {
        AuthenticationService.generateToken(req.body.email, req.body.password)
        .then((tokenObject: string) => res.send(tokenObject))
        .catch((error: any) => res.send('error'));
    }

    public validateToken(req: any, res: any) {
        AuthenticationService.validateToken(req.params.token)
        .then((response: boolean) => res.send(response))
        .catch((error: any) => res.send('error'));
    }

    public refreshToken(req: any, res: any) {
        AuthenticationService.validateToken(req.params.token)
        .then((response: boolean) => res.send(response))
        .catch((error: any) => res.send('error'));
    }
}

export default new AuthenticationController();
