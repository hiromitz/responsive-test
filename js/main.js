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
  .controller('MainCtrl', ['$scope', 'searchStorage', function($scope, searchStorage) {
    
    $scope.lookup = false;
    $scope.url = searchStorage.get() || 'http://corabbit.com/';

    $scope.showWeb = function() {
      searchStorage.set($scope.url);
      $scope.result = $scope.url;
      $scope.lookup = true;
    };
    
  }])

  /**
   * Services that persists and retrieves Search URL from localStorage
   */
  .factory('searchStorage', [function() {
    var STORAGE_ID = 'responsive-test';
      return {
      get: function () {
        return localStorage.getItem(STORAGE_ID) || '';
      },
      set: function (url) {
        localStorage.setItem(STORAGE_ID, url);
      }
    };
  }]);