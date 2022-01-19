// Config environment
require("dotenv").config();
// Import
const bodyParser = require("body-parser");
const express = require("express");
const secureApp = require("helmet");
const logger = require("morgan");

// Connect Application with mongoDB by using mongoose
require("./database/connection");

//   Application
const app = express();
const http = require("http");
const server = http.createServer(app);

// Security
app.use(secureApp());

// Import routes
const userRouter = require("./routes/user.r");
const courseRouter = require("./routes/course.r");
const cardRouter = require("./routes/card.r");

// Middle wares
app.use(logger("dev"));
app.use(bodyParser.json());

// Routes
app.use("/users", userRouter);
app.use("/courses", courseRouter);
app.use("/cards", cardRouter);

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Server is OK",
  });
});

// Catch 404 Errors and forward them to error handler
app.use((req, res, next) => {
  const err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// Error handler function
app.use((err, req, res, next) => {
  const error = app.get("env") === "development" ? err : {};
  const status = err.status | 500;
  // response to client
  return res.status(status).json({
    error: {
      message: error.message,
    },
  });
});

// Start the server
const port = process.env.PORT || 5000;
server.listen(port, () =>
  console.log(`✅ Server is listening on port ${port}`)
);
