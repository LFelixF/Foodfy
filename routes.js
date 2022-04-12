const express = require('express')
const routes = express.Router()
const main = require('./controllers/main')
const admin = require('./controllers/admin')

// MAIN
routes.get("/", main.home)
routes.get("/about", main.about)
routes.get("/revenues", main.revenues)
routes.get("/revenue/:index", main.revenue)

// ADMIN
routes.get("/admin/revenues", admin.index)
routes.get("/admin/revenues/create", admin.create)
routes.get("/admin/revenues/:id", admin.show)
routes.get("/admin/revenues/:id/edit", admin.edit)

// ADMIN - FORM
routes.post("/admin/revenue", admin.post)
routes.put("/admin/revenue", admin.put)
routes.delete("/admin/revenue", admin.delete)

// ERROR
routes.use((req, res) => {
const pageError = "PAGE NOT FOUND"

    res.status(404).render("not-found", {item: pageError})
})

module.exports = routes