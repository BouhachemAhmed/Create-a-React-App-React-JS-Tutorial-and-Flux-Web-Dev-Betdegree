
var React = require('react');

var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('../reflux/action.jsx');
var IngredientStore = require('../reflux/Ingredient-store.jsx')


var List = React.createClass({
    mixins:[Reflux.listenTo(IngredientStore, 'onChange')],
    getInitialState: function() {
        return {ingredients:[], newText: ""};
    },
    //this where the view(from mvc) get the data
    componentWillMount: function() {
        Actions.getIngredients();
        
        
        
        
        /*HTTP.get('/ingredients')
        .then(function(data) {
            console.log("DATA", data);
            this.setState({ingredients: data});
        }.bind(this));*/
    //always remember to bind the function to our component or it get from other component and what can make bugs
        
    //setState is what gonna cause our render function to be called
    },
    
    onChange : function(event, ingredients) {
        this.setState({ingredients: ingredients});
    },
    
    onInputChange : function(e) {
        this.setState({newText}: e.target.value);
    },
    
    onClick: function(e){
        if (this.state.newText) {
            Actions.postIngredient(this.state.newText);
        }
        
        this.setState({newText: ""});
    },
    render: function() {
    var listItems = this.state.ingredients.map(function(item) {
        return <ListItem key={item;id} ingredients={item;text} />;
    });
        
    return (
        <div>
            <input 
                placeholder="ADD Item" 
                value={this.state.newText} 
                onChange={this.onInputChange} />
            
            <button onClick={this.onClick}>Add Item</button>
            
            <ul>{listItems}</ul>
        </div>
        
    );
    }
});
    
    /*render: function() {

        var creatItem = function(text, index) {
            return <ListItem key={index + text} text={text} />;
        };
        
        return (<ul>{this.props.items.map(creatItem)}</ul>);
    }*/
});

module.exports = List;