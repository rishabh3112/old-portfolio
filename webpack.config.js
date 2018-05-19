const path = require('path');
module.exports = [{
    entry: './styles/app.scss',
    output: {
      filename: 'style-bundle.js', // Never used
    },
    module: {
      rules: [{
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'bundle.css',
              outputPath: './dist',  // uncomment when building
            },
          },
          { loader: 'extract-loader' },
          { 
            loader: 'css-loader',
            options: {
              minimize: true,
            } },
          {
            loader: 'sass-loader',
            options: {
              includePaths: ['./node_modules']
            }
          }
        ]
      }]
    },
}];

module.exports.push({
    entry: "./scripts/app.js",
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, 'dist') //uncomment while building
    },
    module: {
      loaders: [{
        test: /\.js$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }]
    },
  });
