const Express = require("express");
const router = Express.Router();

router.get("/", (req, res) => {
  res.render("welcome")
})

module.exports = router;