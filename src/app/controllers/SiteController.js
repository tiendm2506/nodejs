import Course from '../models/Course.js'
import mongooseHelper from '../../utils/mongoose.js'
class SiteController {
    // GET /home
    index(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('pages/home', {
                    courses: mongooseHelper.multipleMongooseToObject(courses),
                })
            )
            .catch(next)
    }

    //GET /search
    search(req, res) {
        res.render('pages/search')
    }
}

export default new SiteController()
