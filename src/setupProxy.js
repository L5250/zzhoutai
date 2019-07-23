const proxy = require("http-proxy-middleware")

module.exports = function(app){
    app.use(
        proxy("/zol-cms",{
            "target": "http://10.168.1.110:9202",
            "changeOrigin": true
        })
    )
}