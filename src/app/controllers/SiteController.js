import Course from "./models/Course.js";
import MultipleMongooObjectseToObject from '../../util/mongoose.js'


class SiteController {
  // [GET] /
  index(req, res, next) {
    Course.find()
        .then(data => {
          // data = data.map(course => course.toObject())
          
          res.render('home', { courses: MultipleMongooObjectseToObject(data) })
        })
        .catch(next);

    // res.render('home');
  }

  //[GET]  /search
  search(req, res) {
    res.render('search');
  }
}

export default new SiteController();
// export default NewsController
