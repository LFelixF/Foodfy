const express = require("express")
const nunjucks = require("nunjucks")
const revenues = require("./data")

const server = express()

server.listen(1000, () => {
    console.log("server is running!")
})

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.set("view engine", "njk")
server.use(express.static("public"))

server.get("/", (req, res) => {
    return res.render("home", {items: revenues})
})

server.get("/about", (req, res) => {
    return res.render("about")
})

server.get("/revenues", (req, res) => {
    return res.render("revenues", {items: revenues})
})

server.get("/revenue/:index", (req, res) => {
    const index = req.params.index
    const revenue = revenues
    const pageError = "REVENUE"

    if (!revenue[index]) {
        return res.render("not-found", {item: pageError})
    }

    return res.render("revenue", {item: revenue[index]})
})

server.use((req, res) => {
    const pageError = "PAGE"

    res.status(404).render("not-found", {item: pageError})
})