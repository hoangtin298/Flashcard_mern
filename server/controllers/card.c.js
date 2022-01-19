const Card = require("../models/Card");

const index = async (req, res, next) => {
  const cards = await Card.find({});
  return res.status(200).json({
    message: "Get cards successfully!",
    cards,
  });
};

module.exports = {
  index,
};
