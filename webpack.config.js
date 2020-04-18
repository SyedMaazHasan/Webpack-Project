var path = require("path");

var baseConfig = {
  entry: {
    main: "./script1.js",
  },

  output: {
    filename: "main2.js",
    path: path.resolve("./build"),
  },
};

// export configuration
module.exports = baseConfig;
