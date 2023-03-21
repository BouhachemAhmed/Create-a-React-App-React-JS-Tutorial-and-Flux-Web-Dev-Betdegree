var React = require('react');
var ReactRouter = require('react-router');
var link = ReactTouter.Link;



var HomePage = React.creatClass({
    render : function() {
        return (
            <div>
                <h1>Home</h1>
                <ul>
                    <li><Link to="/product/55">IOS Course</li>
                    <liLink to="/product/165">React Course</li>
                </ul>
            </div>
        );
    }
});

module.exports = HomePage;