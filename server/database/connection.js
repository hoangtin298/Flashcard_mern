const { DATABASE_URL } = require("../configs/index");
const mongoClient = require("mongoose");

mongoClient
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("✅ Connected to database success");
  })
  .catch(() => {
    console.log(`❌ Connected to database is failed`);
  });
