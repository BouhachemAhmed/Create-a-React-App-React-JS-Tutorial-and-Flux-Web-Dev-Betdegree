var React = require('react')

var NameField = React.createClass({
    getInitialState: function() {
        return {value: ""};
    }
    onChange : function(e) {
        this.setState({value: e.target.value});
    },
    clear: function(){
        this.setState({value: ""});
    },
    
    render : function() {
        return (
            <input className="form-control" palceholder={this.props.type + "Name "} onChange={this.oncChange} value={this.state.value}/>
        );
    }
});
module.exports = NameField;