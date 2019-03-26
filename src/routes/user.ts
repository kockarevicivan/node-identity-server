/**
 * @file Defines all user related route patterns.
 * @author Ivan Kockarevic
 */
import express from 'express';

import UserController from '../controllers/UserController';
import { isAuthenticated } from '../middleware/authenticationMiddleware';

const router = express.Router({});

// Create
router.post('/', isAuthenticated, UserController.create);

// Read
router.get('/', isAuthenticated, UserController.getAll);
router.get('/:id', isAuthenticated, UserController.get);

// Update
router.put('/:id', isAuthenticated, UserController.update);

// Delete
router.delete('/:id', isAuthenticated, UserController.delete);

export default router;
