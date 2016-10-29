/**
 * Created by alex on 10/28/16.
 */
var React = require('react');
var ReactDOM = require('react-dom/server')

exports.get = function(req, res){
    res.render("testAjax", { reactMessage: "sdfa" })
}

exports.post = function(req, res){
    var App = React.createClass({
        handleSearch: function(){

        },
        render: function() {
            return (
                <div className = "name">
                    {req.body.message}
                </div>);
        }
    })

    var ReactApp = React.createFactory(App);
    var htmlOutput = ReactDOM.renderToString(ReactApp({}));


    res.send("Это мой ответ");
    console.log("message: " + req.body.message);
}