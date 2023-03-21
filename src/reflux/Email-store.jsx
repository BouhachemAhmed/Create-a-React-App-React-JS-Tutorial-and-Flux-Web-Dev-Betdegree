
var HTTP = require('../services.httpService.js');
var Reflux = require('reflux');
var Actions = require('./action1.jsx');

var EmailStore = Reflux.create.Store({
    listenables: [Actions],
    submitEmail: function(subscriber) {
        HTTP.post('/subscribers', subscriber)
        .then(function(response) {
            var msg = "";
            
            if (response.status ===200) {
                msg = "Email submitted!"
                
            } else {
                msg = "Submission failed!"
            }
            
            this.trigger(msg);
        }.bind(this));
    }
});