import AuthenticationService from '../services/AuthenticationService';

class AuthenticationController {
    public generateToken(req: any, res: any) {
        AuthenticationService.generateToken(req.params.email, req.params.password)
        .then((token: string) => res.send(token))
        .catch((error: any) => res.send('error'));
    }

    public validateToken(req: any, res: any) {
        AuthenticationService.validateToken(req.params.token)
        .then((response: boolean) => res.send(response))
        .catch((error: any) => res.send('error'));
    }
}

export default new AuthenticationController();
