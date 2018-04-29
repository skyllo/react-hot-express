import webpack from 'webpack';
import merge from 'webpack-merge';
import base from './webpack.base.babel';

export default merge(base, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/client/index.jsx'
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
