class SiteController {
    // GET /home
    index(req, res) {
        res.render("pages/home");
    }

    //GET /search
    search(req, res) {
        res.render("pages/search");
    }
}

export default new SiteController