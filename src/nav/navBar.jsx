var React = require('react';)
var NavItem = require('./navItem.jsx')

var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var NavBar = React.creatClass({
    render: function() {
        
        var navStyle = {
            WebKitBoxShadow:"0 0 4px rgba(0,0,0,0.4)",
            MozBoxShadow: "0 0 4px rgba(0,0,0,0.4)",
            boxShadow: "0 0 4px rgba(0,0,0,0.4)",
            borderRadius 0 
        }
        var titleStyle = {};
        var linkStyle = {};
        
        if (this.props.bgColor) 
            navStyle.background = this.props.bgColor;
        
        if (this.props.titleColor)
            titleStyle.color = this.props.titleColor;
        
        if (this.props.linkColor)
            linkStyle.color = this.props.linkColor;
            
        var createLinkItem = function(item, index) {
            return <NavItem aStyle={linkStyle} key={item.title + index} href= {item.href} title={item.title}
        };
        
        return (
        <div>
            <nav style={navStyle} className="navbar-default">
                <div className="navbar-header">
                    <button type"button" className="navbar-toggle collapsed" data-toggle="collapse" data-targer="#nav-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <link style={titleStyle} className="navbar-brand" to="/">Product Shop</link>
                </div>
                <div className="collapse navbar-collapse" id="nav-collapse">
                    <ul classNAme="nav navbar-nav">{this.props.navData.map(createLinkItem)}</ul>
                </div>
            </nav>
        </div>
        );
    }
            
});

module.exports = NavBar;