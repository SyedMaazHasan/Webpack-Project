var path = require("path");

var baseConfig = {
  entry: {
    main: "./index.html",
  },

  output: {
    filename: "main2.js",
    path: path.resolve("./build"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)?$/,
        use: [{ loader: "babel-loader" }],
      },
      {
        test: /\.html$/,
        use: [{ loader: "raw-loader" }],
      },
      {
        test: /\.(gif|jpe?g|png|ico)$/,
        use: [{ loader: "url-loader" }],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [{ loader: "file-loader" }],
      },
      {
        test: /\.svg$/,
        use: [{ loader: "url-loader" }],
      },
      {
        test: /\.(p)?css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
    ],
  },
};

// export configuration
module.exports = baseConfig;
