import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import path from 'path';

const isProd = process.env.NODE_ENV === 'production';

export default {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/public'),
    publicPath: '/'
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
      {
        test: /\.s?css$/,
        use: [isProd ? MiniCssExtractPlugin.loader : 'style-loader', {
          loader: 'css-loader',
          options: isProd ? {} : {
            sourceMap: true
          }
        }, {
          loader: 'sass-loader',
          options: isProd ? {} : {
            sourceMap: true
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/server/index.html'
    }),

    new MiniCssExtractPlugin({
      filename: isProd ? '[name].[hash].css' : '[name].css',
      chunkFilename: isProd ? '[id].[hash].css' : '[id].css',
    })
  ]
};
