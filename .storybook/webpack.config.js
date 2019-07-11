const path = require("path");
const include = path.resolve(__dirname, '../');

module.exports = {
  module: {
      rules: [
          {
            test: /\.tsx/,
            loader: 'babel-loader!ts-loader',
            exclude: /node_modules/,
            include
          },
          {
            test: /\.css$/,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.scss$/,
            use: ['sass-loader'],
            exclude: /node_modules/,
          },
          {
            test: /\.svg$/,
            use: [
              {
                loader: "babel-loader"
              },
              {
                loader: "react-svg-loader",
                options: {
                  jsx: false // true outputs JSX tags
                }
              }
            ]
          }
      ]
  }
};