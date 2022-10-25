const { Router } = require("express");
const { login } = require("../controllers/auth");


const routerAuth = Router()

routerAuth.post("/login", login)

module.exports = routerAuth