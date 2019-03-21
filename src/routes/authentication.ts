/**
 * @file Defines all authentication routes
 * @author Ivan Kockarevic
 */
import express from 'express';

import AuthenticationController from '../controllers/AuthenticationController';

const router = express.Router({});

// Generate
router.get('/', AuthenticationController.generateToken);

// Validate
router.get('/validate', AuthenticationController.validateToken);

export default router;
