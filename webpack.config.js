module.exports = {
    mode: 'development',
    entry: [
        './public/js/main.js', 
        './public/components/BlogComponent.js', 
        './public/components/CartComponent.js', 
        './public/components/CatalogComponent.js', 
        './public/components/FilterCustomComponent.js', 
        './public/components/NewsComponent.js', 
        './public/components/SearchComponent.js'
    ],
    output: {
        filename: "./build.js"
    },
}