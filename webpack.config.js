// export const devtool = "source-map";
// export const mode = "none";
export const module = {
  rules: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-react"],
      },
    },
  ],
};
