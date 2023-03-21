var React = require('react');

var ProductPage = React.creatClass({
    getInitialState: function(){
        return {pid: ""};
    },
    
    componenDidMount: function() {
      this.setState({pid: this.props.params.producId});  
    },
    
    componrntWillReceiveProps : function(nextProps) {
        this.setState({pid: nextProps.params.productId});
    },
    
    render : function() {
        return (
            <h1>Hi,I'm product number {this.state.productI}</h1>
        );
    }
});

module.exports = ProductPage;