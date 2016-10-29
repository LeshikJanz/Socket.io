/**
 * Created by alex on 10/28/16.
 */
'use strict';

var React = require('react');
var ReactDOM = require('react-dom/server');

exports.get = function (req, res) {
    res.render("testAjax", { reactMessage: "sdfa" });
};

exports.post = function (req, res) {
    var App = React.createClass({
        displayName: 'App',

        handleSearch: function handleSearch() {},
        render: function render() {
            return React.createElement(
                'div',
                { className: 'name' },
                req.body.message
            );
        }
    });

    var ReactApp = React.createFactory(App);
    var htmlOutput = ReactDOM.renderToString(ReactApp({}));

    res.send("Это мой ответ");
    console.log("message: " + req.body.message);
};

//# sourceMappingURL=testAjax-compiled.js.map