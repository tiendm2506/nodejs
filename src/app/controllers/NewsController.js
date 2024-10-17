class NewsController {
    // GET /news
    index(req, res) {
        res.render("pages/news");
    }
    show(req, res) {
        res.send('detail news page')
    }
}

export default new NewsController