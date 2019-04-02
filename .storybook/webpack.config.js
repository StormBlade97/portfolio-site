const path = require("path");

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.scss$/,
    loaders: [
      "style-loader",
      {
        loader: require.resolve("css-loader"),
        options: {
          importLoaders: 1,
          modules: true,
          localIdentName: "[name]__[local]___[hash:base64:5]"
        }
      },
      "sass-loader"
    ],
    include: path.resolve(__dirname, "../")
  });

  // Return the altered config
  return config;
};
