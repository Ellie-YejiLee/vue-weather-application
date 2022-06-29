module.exports = {
    publicPath: process.env.MODE_ENV === "production" ? "/vue-corona-app" : "/",
    outputDir: "docs",
};