var app = angular.module('myApp', []);

app.controller('SwapiController', ['$http', function($http) {
    console.log('controller loaded');

    var self = this;
    var giphyAPIKey = '79064bbf6d1449a69eb0d81af8e89d17';   // your API Key

    self.getSpecies = function(id) {

        $http.get('https://swapi.co/api/species/' + id).then(function (response) {
            console.log('response.data ', response.data);
            self.speciesResult = response.data;

            $http.get(self.speciesResult.films[0]).then(function (response) {
                console.log('film data: ', response.data);

                self.filmResult = response.data;
            });
        });
    }

    self.getTrendingGiphy = function() {
        // example request:
        // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
        var baseUrl = 'http://api.giphy.com/v1/gifs/trending?';
        baseUrl += 'api_key=' + giphyAPIKey;    // api key
        baseUrl += '&limit=5';  // limit
        baseUrl += '&rating=g'; // rating

        console.log('baseUrl: ', baseUrl);
        
        $http.get(baseUrl).then(function(response) {
            console.log('trending giphys ', response.data);
            
        });
    };

    // self.getTrendingGiphy();

    
}]);

app.controller('RandomController', ['$http', function($http) {
    console.log('controller loaded');

    var self = this;
    var giphyAPIKey = '79064bbf6d1449a69eb0d81af8e89d17';   // your API Key

    self.singleGif = {list:[]};
    // self.searchGif = {list:[]};

    self.getRandom = function() {
        // example request:
        // http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5
        var baseUrl = 'http://api.giphy.com/v1/gifs/random?';
        baseUrl += 'api_key=' + giphyAPIKey;    // api key
        // baseUrl += '&limit=5';  // limit
        // baseUrl += '&rating=g'; // rating

        console.log('baseUrl: ', baseUrl);
        console.log('random button clicked');
        
        $http.get(baseUrl).then(function(response) {
            console.log('trending giphys ', response.data);
            self.singleGif.list = response.data;
            console.log(self.singleGif.list);
            self.displayGif = self.singleGif.list.data.image_original_url;
        });
    };

    // self.searchGif = function(search) {
    //     var baseUrl = 'http://api.giphy.com/v1/gifs/search?';
    //     baseUrl += 'api_key=' + giphyAPIKey;    // api key
    //     baseUrl += '&q=' + search;
    //     console.log(search);
    //     $http.get(baseUrl).then(function(response) {
    //         self.searchGif.list = response.data;

    //     })
    // };

}]);
