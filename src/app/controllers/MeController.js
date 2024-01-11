import Course from "./models/Course.js";
import MultipleMongooObjectseToObject from "../../util/mongoose.js";
import MongooToObject from "../../util/mongoose_detail.js";

class MeController {
    //[GET] me
    storedCourses(req, res, next) {
        Course.find()
            .then((data) => {
                res.render("me/storedCourses", {
                    courses: MultipleMongooObjectseToObject(data),
                });
            })
            .catch(next);

        // res.render("me/storedCourses");
    }
}

export default new MeController();
