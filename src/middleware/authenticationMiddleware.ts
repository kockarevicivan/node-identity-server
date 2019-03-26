/**
 * @file JWT authentication middleware.
 * @author Ivan Kockarevic
 */
import jwt from 'jsonwebtoken';
import config from '../config';

const isAuthenticated = (req: any, res: any, next: any) => {

    const decoded: any = jwt.verify(req.headers.authorization, config.secret);

    if (!decoded || !decoded.email) {
        res.status(403).json({ success: false, message: 'You are not allowed to access this resource.' });
    }

    req.user = decoded;

    next();
};

export {
    isAuthenticated,
};
