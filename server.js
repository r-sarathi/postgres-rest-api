require("dotenv").config({ path: `${process.cwd()}/.env` });

const express = require("express");

const authRouter = require("./route/auth-route");
const postsRouter = require("./route/posts-route");
const userRouter = require("./route/user-route");
const catchAsync = require("./utils/catchAsync");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controller/error-controller");

const app = express();

app.use(express.json());

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/posts", postsRouter);
app.use("/api/v1/users", userRouter);

app.use(
  "*",
  catchAsync(async (req, res, next) => {
    throw new AppError(`Can't find ${req.originalUrl} on this server`, 404);
  })
);

app.use(globalErrorHandler);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("Server up and running:", PORT);
});
