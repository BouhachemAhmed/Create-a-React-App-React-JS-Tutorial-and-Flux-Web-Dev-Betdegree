var React = require('react');
var List = require('./List.jsx')

var ListManager = React.creatClass({
    getInitialState: function() {
     return {items: [], newItem:''};   
    },
    
    onChange: function(e) {
        this.setState({newItemText: e.target.value});
    },
                                   
    handleSubmit: function(e) {
    
        e.preventDefault();
        
        var currentItems = this.state.items;
    
        currentItems.push(this.state.newItemText);
        
        this.setState.push({item: currentItems, newItemText: ''});
    },
    
    render: function() {
        
        var divStyle = {
            marginTop: 10
        };
        
        var headingStyle = {
                
        }
        
        if (this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
        }
        
        return {
            <div className={divStyle} "col-sm-4">
                <div className="panel panel-primary">
                    <div clssName="panel-heading">
                        <h3>{this.props.title}</h3>
                    </div>
                    <div clssName="row panel-body">
                        <form anSubmit={this.handleSubmit}>
                            <div className="col-sm-9">
                                <input className="form-control" onChange={this.onChange} value{this.state.newItemText0}></input>
                            </div>
                            <div className="col-sm-2">
                                <button className="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                    <List items={this.state.items} />
                </div>
            </div>
        };
    }
});

module.exports = ListManager;