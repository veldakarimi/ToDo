const fn = () => {
	'use strict';
	angular.module('to_do.demo').directive('to_doCard', CardDirective);

    function CardDirective(){
    	return{
    		templateUrl: '/static/to_do/card.html',
    		restrict:'E'
    	};
    }

    }
fn();
