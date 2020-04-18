const fn = () => {
            'use strict';
            angular.module('to_do.demo', [])
            .config(function($httpProvider) {
                $httpProvider.defaults.xsrfCookieName = 'csrftoken';
                $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
            })
            .controller('To_doController', ['$scope', '$http', To_doController]);
            
            function To_doController($scope, $http) {
                $scope.add = function(list, title){

                    var card = {
                        list: list.id,
                        title: title
                    };

                    $http.post('/to_do/cards/', card).then(function(response)
                        {
                             list.cards.push(response.data);
                        },
                        function(){
                            alert('could not create card')
                            }
                    );

                    
                };

                $scope.data = [];

                $http.get('/to_do/lists/').then(function(response){
                    $scope.data = response.data;
                });
            }
        }
        //This bracket was not here

fn();

//pale juu kuna config ya csrf
//read more here
//https://django-angular.readthedocs.io/en/latest/csrf-protection.html