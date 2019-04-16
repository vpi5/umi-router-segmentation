
export default {
    // umi config
    publicPath : "/static/" ,
    history: 'hash',
    targets: { ie : 9 },
    plugins : [
        ["umi-plugin-react",{
            pwa : {
                disableServiceWorker : false ,
            },
            dynamicImport : {
                webpackChunkName : true ,
                loadingComponent : "./pages/loading"
            },
            antd : true ,
            hardSource : true ,
        }]
    ],

    // webpack config
}