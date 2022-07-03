const express = require("express");
const logger = require("./utils/logger");

// read environment variables
require("dotenv").config();
const { NODE_ENV, NODE_NAME, EX_PORT } = process.env;

const app = express();

app.listen(3001, () =>
  logger.info(`Server listening on ${EX_PORT} in ${NODE_ENV} mode`)
);
