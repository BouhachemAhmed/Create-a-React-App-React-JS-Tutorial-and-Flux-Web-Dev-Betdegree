var HTTP = require('../services/httpservice');
var Reflux = require('reflux');
var Actions = require('./actions.jsx');


var IngredientStore = Reflux.createStore({
    listenables: [Actions],
    
    getIngriendents: function() {
        HTTP.get('/ingredients')
        .then(function(data) {
            this.ingredients = json;
            this.fireUpdate();
        }.bind(this));
    },
    
    postIngredients: function(text) {
    //Posted ingredient to the server
    //now we got a successful callback
        if (!this.ingredients) {
            this.ingredients = [];
            
        },
            
        var ingredient = {
            "text" : text,
            "id": Math.floor(Date.now()/ 1000) + text
        };
        
        this.ingredients.push(ingredient);
        this.fireUpdate();
        
        HTTP.post('/ingredients, ingredient')
        .then(function(response) {
            this.getIngredients();
        }).bind(this);
    },
    //Refresh function
    fireUpdate: function() {
        //change is the event
        this.trigger('change', this.ingredients);
    }
    
});


mudole.exports = IngredientStore;