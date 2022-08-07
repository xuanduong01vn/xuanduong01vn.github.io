import express from 'express';
import topicControllers from '../controllers/topicController.js'
const router = express.Router();

router.get('/',topicControllers.getTopics);

export default router;