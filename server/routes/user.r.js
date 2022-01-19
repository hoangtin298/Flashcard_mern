const router = require("express-promise-router")();
const passport = require("passport");
const passportConfig = require("../middlewares/passport");

const UserController = require("../controllers/user.c");

const {
  validateBody,
  validateParam,
  schemas,
} = require("../helpers/routerHelpers");

router.route("/").get(UserController.index);

module.exports = router;
