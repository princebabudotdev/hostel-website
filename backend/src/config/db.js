import mongoose from "mongoose";
import config from "./config.js";
import logger from "../loggers/winston.logger.js";

const connectDB = () => {
  mongoose
    .connect(config.DB_URL, {})
    .then(() => {
      logger.info("Connect to mongoDB");
    })
    .catch((err) => {
      logger.info("Error to connecting to mongoDB", err);
    });
};

export default connectDB;
