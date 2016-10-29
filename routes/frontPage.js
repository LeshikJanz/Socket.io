var React = require("react");
var ReactDOM = require("react-dom/server");

var ReactApp = React.createFactory(require("../components/frontPage.jsx"));

exports.get = function(req, res, next){
    var htmlOutput = ReactDOM.renderToString(ReactApp({}));

    res.render('frontPage', {
        Title: "Главная страница",
        reactOutput: htmlOutput
    });
}

