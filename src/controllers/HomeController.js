const { Homehcl, Homehca, MainSection } = require("../models")

const HomeController = {
    home: async(req, res) => {
        let hcl = await Homehcl.findOne()
        console.log(hcl)
        let hca = await Homehca.findOne()
        console.log(hca)
        let ms = await MainSection.findOne()
        console.log(ms)
        return res.render("homePage", {title: "MICMAR | HOME", hcl, hca, ms});
    }
};

module.exports = HomeController