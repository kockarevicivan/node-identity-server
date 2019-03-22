/**
 * @file Defines all authentication related route patterns.
 * @author Ivan Kockarevic
 */
import express from 'express';

import AuthenticationController from '../controllers/AuthenticationController';

const router = express.Router({});

// Generate
router.post('/', AuthenticationController.generateToken);

// Validate
router.post('/validate', AuthenticationController.validateToken);

// Refresh
router.post('/refresh', AuthenticationController.refreshToken);

export default router;
