# umi-router-segmentation
umi搭建的react工程项目，按需打包，忽略指定文件夹，实现按业务场景进行打包。

# 安装依赖

npm install || cnpm install || yarn install

# 启动
1、启动整个项目  npm start || cnpm start || yarn start
2、启动首页部分 不包含 loading和work 部分 npm protoStart || cnpm protoStart || yarn protoStart

# 使用方式
1、安装cross-env插件
2、在.umirc.proto.js文件中的exclude模块添加要忽略的文件夹或文件
3、在package.json中的script模块中添加（分模块启动项目和分模块打包项目）  
    "protoStart": "cross-env UMI_ENV=proto umi dev",
    "protoBuild": "cross-env UMI_ENV=proto umi build"
4、在终端启动或者打包 输入命令：
    启动：yarn protoStart  ==> 只启动index文件夹中的文件，其余忽略，
    打包：yarn protoBuild  ==> 只打包index文件夹中的文件，其余忽略

# 注意事项
使用这种方式进行打包 会忽略指定的文件 请勿把全局组件放入其中
