/**
 * @file Defines all user routes
 * @author Ivan Kockarevic
 */
import express from 'express';

// import UserService from '../services/UserService';

const router = express.Router({});

router.get('/', (req, res) => res.send('Hello from the user route!'));

export default router;
