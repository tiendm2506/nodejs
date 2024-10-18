import Course from '../models/Course.js'
class SiteController {
    // GET /home
    index(req, res) {
        Course.find({})
            .then((courses) => {
                return res.json(courses)
            })
            .catch((err) => {
                console.log('Error: ', err)
            })
    }

    //GET /search
    search(req, res) {
        res.render('pages/search')
    }
}

export default new SiteController()
