import express from 'express';
import MeController from '../app/controllers/MeController.js';
const meRouter = express.Router();

meRouter.get('/stored/courses', MeController.storedCourses)

export default meRouter;
