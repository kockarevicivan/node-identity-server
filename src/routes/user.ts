/**
 * @file Defines all user routes
 * @author Ivan Kockarevic
 */
import express from 'express';

import UserController from '../controllers/UserController';

const router = express.Router({});

router.get('/', UserController.getAll);
router.get('/:id', UserController.get);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);

export default router;
