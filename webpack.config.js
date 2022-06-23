const path = require('path');
// const { fileURLToPath } = require('url');
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

module.exports = (development) => ({
  mode: development ? 'development' : 'production',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  externals: {
    bufferutil: 'bufferutil',
    'utf-8-validate': 'utf-8-validate',
  },
});
