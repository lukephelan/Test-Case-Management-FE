module.exports = {
  devServer: {
    proxy: "http://localhost:1234"
  },
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Test Case Management";
      return args;
    });
  }
};
