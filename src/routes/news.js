import express from 'express';
import NewsController from '../app/controllers/NewsController.js';
const newRouter = express.Router();

// const newsController = require('../app/controllers/NewsController')

// NewsController.index

newRouter.get('/:slug', NewsController.show);
newRouter.get('/', NewsController.index);

// module.exports = newRouter
export default newRouter;
