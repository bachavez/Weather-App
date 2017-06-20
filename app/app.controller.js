(function(){
    'use strict';

    angular
        .module('weatherApp')
        // .controller('weatherCtrl', weatherCtrl)  In this controller you are immediately calling the 
            // function weatherCtrl so the function runs automatically on open or refresh
        .controller('weatherCtrl', weatherCtrl)

            weatherCtrl.$inject = ['$http'];
                
                function weatherCtrl($http) {
                    var vm = this;
                    vm.getWeather = getWeather;

                    function getWeather() {
                        var $city = vm.cityName
                        $http
                        .get('http://api.openweathermap.org/data/2.5/find?q='+$city+
                        '&units=imperial&APPID=0a400011d9062149daf9b1e3ca91d3d1')
                        .then(function(response){
                            console.log(response.data.list);
                            //vm.weather = response.data;
                            //http://openweathermap.org/img/w/10d.png --weather icons
                        });
                        vm.arraySearchHistory.city={{$citySearch}};
                        vm.arraySearchHistory.date= d.getFullYear() + '/' + (month<10 ? '0' : '')
                                                + month + '/' + (day<10 ? '0' : '') + day;
                    }
                }                                    
            function testCtrl(){
                //var vm = this;
                alert('Angular is working');

            }
        vm.arraySearchHistory = {};

})();