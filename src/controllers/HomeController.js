const HomeController = {
    home: ((req, res) => {
        return res.render("homePage", {title: "HOME"});
    }
)};

module.exports = HomeController