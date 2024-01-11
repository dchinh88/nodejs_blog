import express from 'express';
import SiteController from '../app/controllers/SiteController.js';
// import NewsController from '../app/controllers/NewsController.js';
const siteRouter = express.Router();

siteRouter.get('/search', SiteController.search);
siteRouter.get('/', SiteController.index);

// module.exports = newRouter
export default siteRouter;
