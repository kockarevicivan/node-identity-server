/**
 * @file JWT authentication middleware.
 * @author Ivan Kockarevic
 */
import express from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

// Request is any because we want to assign the decoded user object to it.
const isAuthenticated = (req: any, res: express.Response, next: express.NextFunction) => {

    const decoded: any = jwt.verify(req.headers.authorization, config.secret);

    if (!decoded || !decoded.email) {
        return res.status(403).json({ success: false, message: 'You are not allowed to access this resource.' });
    }

    req.user = decoded;

    next();
};

export {
    isAuthenticated,
};
