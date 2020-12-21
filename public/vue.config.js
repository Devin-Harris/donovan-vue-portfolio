module.exports = {
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/styles/_colors.scss";`
            }
        }
    },
    lintOnSave: false
}