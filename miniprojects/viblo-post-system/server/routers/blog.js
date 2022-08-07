import express from 'express';
import blogController from '../controllers/blogController.js'
const router = express.Router();


router.get('/',blogController.getBlogs);
router.get('/:id',blogController.getBlog);
router.post('/',blogController.addBlog);

export default router;
