// utils/errorUtils.js
class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

exports.AppError = AppError;

exports.handleErrors = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  // Handle different types of errors
  let error = { ...err };
  error.message = err.message;

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((val) => val.message);
    error = new AppError(`Invalid input data: ${messages.join(", ")}`, 400);
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    error = new AppError(
      `Duplicate field value: ${field}. Please use another value.`,
      400
    );
  }

  // Mongoose CastError (invalid ObjectId)
  if (err.name === "CastError") {
    error = new AppError(`Invalid ${err.path}: ${err.value}`, 400);
  }

  // Development vs Production error responses
  if (process.env.NODE_ENV === "development") {
    res.status(error.statusCode).json({
      status: error.status,
      message: error.message,
      stack: err.stack,
      error: err,
    });
  } else {
    // Don't leak error details in production
    res.status(error.statusCode).json({
      status: error.status,
      message: error.isOperational ? error.message : "Something went wrong",
    });
  }
};
