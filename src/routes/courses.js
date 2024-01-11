import express from 'express';
import CoursesController from '../app/controllers/CoursesController.js';
import route from './index.js';
const coursesRouter = express.Router();

coursesRouter.get('/create', CoursesController.create)
coursesRouter.post('/store', CoursesController.store)
coursesRouter.get('/:id/edit', CoursesController.edit)
coursesRouter.put('/:id', CoursesController.update)
coursesRouter.delete('/:id', CoursesController.delete)
coursesRouter.get('/:slug', CoursesController.show);
// module.exports = newRouter
export default coursesRouter;
