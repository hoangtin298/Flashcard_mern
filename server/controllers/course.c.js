const Course = require("../models/Course");

const index = async (req, res, next) => {
  const courses = await Course.find({});
  return res.status(200).json({
    message: "Get courses successfully!",
    courses,
  });
};

module.exports = {
  index,
};
