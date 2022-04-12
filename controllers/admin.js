const fs = require("fs")
const data = require('../data.json')

// Page - INDEX
exports.index = (req, res) => {
    return res.render("admin/index", { revenues: data.revenues })
}

// Page - CREATE
exports.create = (req, res) => {
    return res.render("admin/create")
}

// Dados Form - CREATE
exports.post = (req, res) => {
    const revenue = req.body
    const errPage = "WRITE FILE ERROR"

    data.revenues.push(revenue)

    fs.writeFile("data.json", JSON.stringify(data, null, 4), (err) => {
        if(err) return res.render("not-found", { item: errPage })

        return res.redirect("/admin/revenues")
    })
}

// Page - SHOW
exports.show = (req, res) => {
    const id = req.params.id
    const revenue = data.revenues[id]

    revenue.id = id

    return res.render("admin/show", { revenue })
}

// Page - EDIT
exports.edit = (req, res) => {
    const id = req.params.id
    const revenue = data.revenues[id]

    revenue.id = id

    return res.render("admin/edit", { revenue })
}

// Dados Form - EDIT
exports.put = (req, res) => {
    const { id } = req.body
    const errPage = "WRITE FILE ERROR"
    
    data.revenues[id] = req.body
    delete data.revenues[id].id

    fs.writeFile("data.json", JSON.stringify(data, null, 4), (err) => {
        if(err) return res.render("not-found", { item: errPage })

        return res.redirect("/admin/revenues")
    })
}

// Button Delete - EDIT
exports.delete = (req, res) => {
    const { id } = req.body
    const newArray = data.revenues.filter((revenue, index) => index != id)
    const errPage = "WRITE FILE ERROR"

    data.revenues = newArray

    fs.writeFile("data.json", JSON.stringify(data, null, 4), (err) => {
        if(err) return res.render("not-found", { item: errPage })

        return res.redirect("/admin/revenues")
    })
}