/*global angular */
/*jshint unused:false */
'use strict';

/**
 * The main TodoMVC app module
 *
 * @type {angular.Module}
 */
angular.module('responsiveTestApp', [])

  /**
   * The main controller for the app. The controller:
   */
  .controller('MainCtrl', ['$scope', function($scope) {
  }])

  /**
   * Services that persists and retrieves Search URL from localStorage
   */
  .factory('searchStorage', [function() {
  	var STORAGE_ID = 'responsive-test';
  	return {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},
		put: function (todos) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
  }]);