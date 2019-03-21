/**
 * @file Defines all user related route patterns.
 * @author Ivan Kockarevic
 */
import express from 'express';

import UserController from '../controllers/UserController';

const router = express.Router({});

// Create
router.post('/', UserController.create);

// Read
router.get('/', UserController.getAll);
router.get('/:id', UserController.get);

// Update
router.put('/:id', UserController.update);

// Delete
router.delete('/:id', UserController.delete);

export default router;
