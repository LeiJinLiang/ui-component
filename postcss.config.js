module.exports = {
    plugins: [
        // require('autoprefixer'),
        require('precss'),
        require('postcss-import')({

        }),
        require('postcss-cssnext')({
            browsers: ['last 2 versions', '> 5%'],
        }),
        require('postcss-assets')({
            basePath : './src',
            loadPaths: []
        }),
    ]
}
