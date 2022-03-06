module.exports = {
  resolve: {
    fallback: { path: require.resolve('path-browserify'),
    "os": require.resolve("os-browserify/browser"),
    "fs": false,
   },
  },
  node: { fs: 'empty' },
}