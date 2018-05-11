const { injectBabelPlugin, getLoader } = require('react-app-rewired');

/* config-overrides.js */
module.exports = {
  webpack: (config, env) => config,
  jest: config => config,
  devServer (configFunction) {
    return (proxy, allowedHost) => {
      const config = configFunction(proxy, allowedHost);
      // 这个配置是webpack提供的另一种功能 适合vagrant共享目录下开发
      // aggregateTimeout 为 delay 意为1000毫秒之后没有修改才会进行刷新
      // poll 为每5000毫秒检查一次 的确很消耗性能 非vagrant共享目录下开发请关闭
      // 时间可以酌情添加
      config.watchOptions.aggregateTimeout = 500;
      config.watchOptions.poll = 2000;
      return config;
    };
  }
};
