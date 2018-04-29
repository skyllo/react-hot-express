import nodeExternals from 'webpack-node-externals';
import path from 'path';

export default {
  mode: 'production',
  target: 'node',
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'server-bundle.js',
    libraryTarget: 'commonjs2'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },
  // https://webpack.js.org/configuration/externals/#externals
  // https://github.com/liady/webpack-node-externals
  externals: nodeExternals(),
};
