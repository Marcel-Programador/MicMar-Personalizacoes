const HomeController = {
    home: ((req, res) => {
        return res.render("homePage", {title: "MICMAR | HOME"});
    }
)};

module.exports = HomeController