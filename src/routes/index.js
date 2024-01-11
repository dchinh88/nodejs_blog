import newRouter from './news.js';
import siteRouter from './site.js';
import coursesRouter from './courses.js';
import meRouter from './me.js';

function route(app) {
  app.use('/news', newRouter);
  app.use('/courses', coursesRouter)
  app.use('/me', meRouter)
  app.use('/', siteRouter);
  

}
export default route;
