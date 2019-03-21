class AuthenticationService {
    public generateToken(email: string, password: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            resolve('test');
        });
    }

    public validateToken(token: string): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            resolve(true);
        });
    }
}

export default new AuthenticationService();
