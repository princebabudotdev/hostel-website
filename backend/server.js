import httpServer from "./src/app.js";
import config from "./src/config/config.js";
import connectDB from "./src/config/db.js";
import logger from "./src/loggers/winston.logger.js";

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  logger.error(`Uncaught Exception: ${error.message}`, { stack: error.stack });
  process.exit(1);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  logger.error(`Unhandled Rejection at: ${promise}, reason: ${reason}`);
  process.exit(1);
});

// connect to DB
connectDB();

const server = httpServer.listen(config.PORT, () => {
  logger.info(`Server is running on PORT ${config.PORT}`);
  logger.debug(`Environment: ${config.NODE_ENV || "development"}`);
});
