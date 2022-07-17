const express = require("express");
const logger = require("./utils/logger");

// read environment variables
require("dotenv").config();
const { NODE_ENV, EX_PORT } = process.env;

const app = express();

app.listen(EX_PORT, () =>
  logger.info(`Server listening on ${EX_PORT} in ${NODE_ENV} mode`)
);
