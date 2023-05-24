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
              sourceMap: false, // this line should fix the error
            },
          },
        ],
      },
    ],
  },

  // ...
};
