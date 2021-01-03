module.exports = {
    css: {
        modules: true
    },
    configureWebpack:{
        optimization: {
            splitChunks: {
            chunks: 'all',
            },
        }
    }
}