import express from 'express';
import SiteController from '../app/controllers/SiteController.js';
// import NewsController from '../app/controllers/NewsController.js';
const siteRouter = express.Router()


siteRouter.use('/search', SiteController.search)
siteRouter.use('/', SiteController.index)



// module.exports = newRouter
export default siteRouter









