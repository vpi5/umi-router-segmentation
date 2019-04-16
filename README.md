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

# umi 配置 has 路由  http://localhost:3000/#/
.umirc.js中添加 history: 'hash',

# react umi 一键兼容到IE 9 一键兼容到IOS 8
1、在.umirc.js文件中配置
2、添加targets: { ie : 9 } //此处是需要兼容 IE 9 的地方
3、添加
        targets:{ ios : 8 },
        autoprefixer : {
            flexbox : true,
        }
//此处是兼容 IOS 8 并且 兼容 flexbox布局  据说需要umi2.4以上版本才会兼容