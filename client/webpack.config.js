module.exports = {
  // ...

  module: {
    rules: [
      // ...
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
            },
          },
          "postcss-loader", // Add postcss-loader here
        ],
      },
    ],
  },

  // ...
};
