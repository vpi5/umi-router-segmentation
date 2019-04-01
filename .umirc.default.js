
export default {
    // umi config
    publicPath : "/static/" ,
    history: 'hash',
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