/**
 * @file Defines all authentication related business logic.
 * @author Ivan Kockarevic
 */
class AuthenticationService {
    /**
     * Generates a JWT token, based on the provided login data.
     * @param email Email of the user that requests the token.
     * @param password Password of the user that requests the token.
     */
    public generateToken(email: string, password: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            resolve('test');
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
