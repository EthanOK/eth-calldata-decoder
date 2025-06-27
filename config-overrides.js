const webpack = require("webpack");

module.exports = function override(config) {
  config.resolve.fallback = {
    http: require.resolve("http-browserify"),
    https: require.resolve("https-browserify"),
    stream: require.resolve("stream-browserify"),
    buffer: require.resolve("buffer"),
    process: require.resolve("process/browser"),
    url: require.resolve("url/"),
    util: require.resolve("util/"),
    zlib: false,
  };

  config.plugins = [
    ...(config.plugins || []),
    new webpack.ProvidePlugin({
      process: "process/browser",
      Buffer: ["buffer", "Buffer"],
    }),
  ];

  return config;
};
