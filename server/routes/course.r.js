const router = require("express-promise-router")();

const CourseController = require("../controllers/course.c");

const {
  validateBody,
  validateParam,
  schemas,
} = require("../helpers/routerHelpers");

router.route("/").get(CourseController.index);

module.exports = router;
