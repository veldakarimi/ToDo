const fn = () => {
            'use strict';
            angular.module('to_do.demo', [])
                .controller('To_doController', ['$scope', '$http', To_doController]);
            function To_doController($scope, $http) {
                $scope.add = function(list, title){
                    var card = {
                        title: title
                    };
                    list.cards.push(card);
                };

                $scope.data = [];
                $http.get('/to_do/lists').then(function(response){
                    $scope.data = response.data;
                });
                }
        fn();