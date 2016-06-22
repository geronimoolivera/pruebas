'use strict';

/* Services */
/* Se aplica el uso de servicios*/
var carAppServices = angular.module('carAppServices', []);

//Se declara el servicio Car! con una sola propiedad
carAppServices.factory('Car', [
  function(){
    return {
    	notify: function(msg){
    		alert(msg);
    	},
    	getCars: function(){
    		var cars = [{
				        "name": "NEW QASHQAI", 
				        "snippet": "MADE WITH YOU IN MIND TO GIVE YOU THE HIGHEST QUALITY"
				    },
				    {
				       
				        "name": "Veloster", 
				        "snippet": "SPORTY LIKE A COUPE. ROOMY LIKE A SEDAN."
				    },
				    {
				        "name": "Navara", 
				        "snippet": "The Navara is all about freedom including freedom of choice."
				    }];

		    return cars;
    	}
    }
  }]);
