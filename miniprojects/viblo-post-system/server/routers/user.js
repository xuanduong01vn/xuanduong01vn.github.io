import express from 'express';
import userControllers from '../controllers/userController.js'
import authenticateController from '../controllers/authenticateController.js';
const router = express.Router();

// router.get('/',userControllers.getUsers);
router.get('/',userControllers.getUsers);
router.get('/:id',userControllers.getUser);
router.post('/',userControllers.addUser);
router.put('/:id',userControllers.updateUser);
router.delete('/:id',userControllers.deleteUser);

export default router;
