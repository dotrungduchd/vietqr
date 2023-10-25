require("dotenv").config();
const _ = require("lodash");
const configLocal = require("./config.local.json");

const defaultConfig = configLocal;
const environment = process.env.NODE_ENV;
let environmentConfig;

if (environment == "local") {
  environmentConfig = configLocal;
}

const finalConfig = _.merge(defaultConfig, environmentConfig);
global.gConfig = finalConfig;

console.log(
  `global.gConfig: ${JSON.stringify(
    global.gConfig,
    undefined,
    global.gConfig.json_indentation
  )}`
);
