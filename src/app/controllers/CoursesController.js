import Course from "./models/Course.js";
import MultipleMongooObjectseToObject from '../../util/mongoose.js'
import MongooToObject from "../../util/mongoose_detail.js";

class CoursesController {
  // [GET] /khoa-hoc/:slug
  show(req, res, next) {

    Course.findOne({slug: req.params.slug})
    .then(course => {
        // res.json(course)
        res.render('courses/show', {course: MongooToObject(course)})
    })
    .catch(next)

    // res.send('courses detail + ' + req.params.slug)
  }

  // [GET] /courses/create
  create(req, res, next) {
    // res.send('course')
    res.render('courses/create')
  }

  // [POST] /courses/store
  store(req, res, next) {
    // res.json(req.body)
    const formData = req.body;
    formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`
    const course = new Course(formData);
    course.save()
        .then(() => res.redirect('/'))
        .catch(() => {

        })

    res.send('save')
  }

  //[GET] /courses/:id/edit
  edit(req, res, next) {
    Course.findById(req.params.id)
    .then(course => res.render('courses/edit', {
        course: MongooToObject(course)
    }))
    .catch(next)
    // res.render('courses/edit')
  }

  //[PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({_id: req.params.id}, req.body)
    .then(() => res.redirect('/me/stored/courses'))
    .catch(next)
  }

  //[DELETE] /courses/:id
  delete(req, res, next) {
    Course.deleteOne({ _id: req.params.id })
    .then(() => res.redirect('back'))
    .catch(next)
  }


    
}

export default new CoursesController();
