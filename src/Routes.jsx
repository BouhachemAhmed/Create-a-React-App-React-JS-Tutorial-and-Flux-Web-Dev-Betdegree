var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var CreateHistory = require('history/lib/creatHashHistory');

var History = new CreateHistory({
   qureyKey; false 
});

var Base = require('./component/Base.jsx');
var Page1 = require('./component/Page1.jsx');
var Page2 = require('./component/Page2.jsx');


var Router = (
    <Router history={History}>
        <Route path="/" component={Base} >
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </Route>
    </Router>
);

module.exports = Routes;