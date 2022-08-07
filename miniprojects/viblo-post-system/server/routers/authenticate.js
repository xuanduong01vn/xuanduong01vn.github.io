import express from 'express';
import authenticateControllers from '../controllers/authenticateController.js'
import loginControllers from '../controllers/loginController.js';
const router = express.Router();

router.get('/',loginControllers.authenticateUser);

export default router;