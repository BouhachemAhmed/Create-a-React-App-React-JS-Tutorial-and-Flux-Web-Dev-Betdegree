var React = require('react');
var NavBar = require('./nav/navBar.jsx')
var LeadCapture = require('./forms/LeadCapture.jsx');
var navLinks = [
    {
        title: "Home",
        href: "/";
    },
    {
        title: "Home",
        href: "/product/55";
    },
    {
        title: "Home",
        href: "/product/66";
    }
];

var BasePage = React.creatClass({

    
    render : function() {
        
        var style = {
        paddingTop: 20    
        };
        
        return (
            <div>
                <NavBar bgColor="red" titleColor="#FFF" LinkColor="#3097d1" navData={navLinks} />
                <div className="container">
                    <div className="row">
                        <div className='col-sm-9'>
                            {this.props.children}
                        </div>
                        <div className='col-sm-3'>
                            <LeadCapture />
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
});

module.exports = BasePage;