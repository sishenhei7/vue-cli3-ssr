module.exports = {
  chainWebpack: config => {
    config
      .entry('app')
        .clear()
        .end()
      .entry('app')
        .add('./src/entry-client.js');

    config
      .plugin('VueSSRClientPlugin')
        .use(require('vue-server-renderer/client-plugin'));

    config
      .optimization
      .splitChunks({
        chunks: 'all'
      });
  },
  lintOnSave: process.env.NODE_ENV !== 'production',
  css: {
    sourceMap: true,
  },
  productionSourceMap: false,
  runtimeCompiler: true,
  publicPath: '/dist',
};
