'use strict';

/* App Module */
/* se crea el modulo del aplicativo*/
var carApp = angular.module('carApp', [
  'carAppControllers',
  'carAppServices' // se agrega el servicio creado en services.js
]);