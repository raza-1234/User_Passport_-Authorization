const Express = require("express");
const router = Express.Router();

router.get("/login", (req, res) => {
  res.render("login")
})

router.get("/register", (req, res) => {
  res.render("register")
})

module.exports = router;