const router = require("express-promise-router")();

const CardController = require("../controllers/card.c");

const {
  validateBody,
  validateParam,
  schemas,
} = require("../helpers/routerHelpers");

router.route("/").get(CardController.index);

module.exports = router;
