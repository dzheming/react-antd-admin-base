const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require("customize-cra");
const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
process.env.CI = "false";
const addCustomize = () => (config) => {
  if (config.output.publicPath) {
    config.output.publicPath =
      process.env.NODE_ENV === "production"
        ? "/react-antd-admin-base/"
        : "/";
  }
  if (config.resolve) {
    config.resolve.extensions.push(".jsx");
  }
  return config;
};
module.exports = override(
  // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true, // 自动打包相关的样式
  }),

  // 使用less-loader对源码中的less的变量进行重新指定
  addLessLoader({
    lessOptions: {
      javascriptEnabled: true,
      modifyVars:  { 
          '@primary-color': '#1DA57A', 
          '@font-size-base': '14px;', 
          '@text-color': 'rgba(0, 0, 0, 0.65)', 
          '@border-radius-base': '4px', 
          '@border-color-base': '#3cb371',
          '@box-shadow-base': '0 3px 6px -4px rgba(23,132,98,.12),0 6px 16px 0 rgba(23,132,98,.08),0 9px 28px 8px rgba(23,132,98,.05)',
        },
    },
  }),

  // 配置路径别名
  addWebpackAlias({
    "@": resolve("src"),
  }),
  addCustomize()
);
