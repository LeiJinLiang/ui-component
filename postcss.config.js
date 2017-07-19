module.exports = {
    plugins: [
        require('autoprefixer'),
        require('precss'),
        require('postcss-assets')({
            basePath : './src',
            loadPaths: []
        })
    ]
}
