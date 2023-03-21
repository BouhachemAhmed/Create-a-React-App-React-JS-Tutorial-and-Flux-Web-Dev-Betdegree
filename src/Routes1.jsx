var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var CreatHistory = require('History/lib/createHashHistory');

var History = new CreatHistory({
   querykey = false 
});


var BasePage = require('./components/BasePage.jsx');

var HomePage = require('./components/HomePage.jsx');

var ProductPage = require('./components/ProductPage.jsx');

var Routes = {
    
    <Router history={History}>
        <Route path="/" component={BasePage} />
            <IndexRoute component={HomePage} />
            <Route path="/product/:productId" component={Product} />
        </Route>
    </Router>
    
};

module.exports = History;
