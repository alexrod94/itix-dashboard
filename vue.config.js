module.exports = {
  devServer: {
    proxy: {
      "^": {
        target: " http://cirrux.es:5000",
        changeOrigin: true,
      },
    },
  },
};
