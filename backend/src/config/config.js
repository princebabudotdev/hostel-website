import dotenv from "dotenv";

dotenv.config();

const config = {
  DB_URL: process.env.DB_URL,
  NODE_ENV:process.env.NODE_ENV,
  PORT:process.env.PORT
};

export default config;
