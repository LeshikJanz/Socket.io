var React =  require('react');

var news = [
    {
        author: "Вася",
        text: "Пришел с работы"
    },
    {
        author: "Петя",
        text: "Поел суп"
    },
    {
        author: "Леша",
        text: "Написал скрипт"
    }
];

var News = React.createClass({
    render: function() {
        var data = this.props.data;
        var newsTemplate = data.map(function(elem, index, array){
            return (<div>

                <h4>{index+1}. {elem.author}</h4>
                <h5>{array[index].author}</h5>
                <p>{elem.text}</p>
            </div>);
        })
        return (
            <div className="news">
                {newsTemplate}
            </div>
        );
    }
})

var App = React.createClass({
    render: function() {
        return (
            <div className = "name">
                I'm the best root
            </div>);
    }
})

var Table = React.createClass({
    render: function() {
        return (
            <table>
                <tr>
                    <td>Maks</td>
                </tr>
                <tr>
                    <td>Evgen</td>
                </tr>
                <tr>
                    <td>Alex</td>
                </tr>
            </table>
        );
    }
})

var ReactApp = React.createClass({
    render: function() {
        return (
            <div className = "container">
                <App />
                <Table />
                <News data = { news }/>
            </div>

        );
    }
})

module.exports = ReactApp;