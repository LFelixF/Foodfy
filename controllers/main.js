const data = require('../data.json')

// Page - HOME
exports.home = (req, res) => {
    return res.render("main/home", {items: data.revenues})
}

// Page - ABOUT
exports.about = (req, res) => {
    return res.render("main/about")
}

// Page - REVENUES
exports.revenues = (req, res) => {
    return res.render("main/revenues", {items: data.revenues})
}

// Page - REVENUE
exports.revenue = (req, res) => {
    const index = req.params.index
    const revenue = data.revenues
    const pageError = "REVENUE NOT FOUND"
    
    if (!revenue[index]) {
        return res.render("not-found", {item: pageError})
    }
    
    return res.render("main/revenue", {item: revenue[index]})
}