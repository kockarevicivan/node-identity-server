/**
 * @file Defines all user routes
 * @author Ivan Kockarevic
 */
import express from 'express';

// import AuthenticationService from '../services/AuthenticationService';

const router = express.Router({});

router.get('/', (req, res) => res.send('Hello from the authentication route!'));

export default router;
