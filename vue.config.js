module.exports = {
    css: {
      modules: true,
      extract: false
    },
    configureWebpack:{
        optimization: {
            splitChunks: {
            chunks: 'all',
            },
        }
    }
}