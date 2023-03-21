var Fetch = require('whatwg-fetch');
var baseUrl = 'http://localhost:6060';


var service = {
    get: function(url) {
        console.log("making request");
        return fetch(baseUrl + url)
        //.then is a promise from fetch that it would get us a response
        .then(function(response) {
            console.log("RES: ", response);
            return response.json();
        }); 
    },
    
    Post : function(url, body) {
        return fetch(baseUrl + url, {
            headers: {
                'Accept : 'text/plain,
                'Conten-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(body)
        }).then(function(response) {
            return response;
        });
    }
};


module.exports = service;
