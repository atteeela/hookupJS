/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

'use strict';

angular
.module('auditpagesApp')
.controller('AccountKeywordsCtrl', function ($scope,$http, Keyword, $location) {
$scope.awesomeThings = [];

    $http.get('/api/keywords').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
      console.log($scope.awesomeThings);
     socket.syncUpdates('keyword', $scope.awesomeThings);
    });
    $scope.errors = {};
$scope.keywords = [ {
   "_id": "5451c2cf0d90f415458b4567",
   "keyword": "mobile phone"
  
},
 {
   "_id": "54502ba33dd00722b92ce18e",
   "keyword": "digital cameras"
  
}	

];
//    $scope.addKeyword = function(form) {
//      if($scope.newKeyword === '') {
//        return;
//      }
//    
//      console.log($scope.newKeyword);
//        console.log('hee');
//      $http
//        .post('/api/keyword', { keyword: $scope.newKeyword })
//        .success(function(){
//          console.log('success:', arguments);
//        })
//        .error(function(){
//          console.log('error:', arguments);
//        });
//      $scope.newKeyword = '';
//    };


//  $scope.addKeyword = function() {
//      if($scope.newKeyword === '') {
//        return;
//      }
//      $http.post('/api/keywords', { keyword: $scope.newKeyword });
//      $scope.newKeyword = '';
//    };


 $scope.addKeyword= function() {
      $scope.submitted = true;

      
        Keyword.saveKeyword({
           name: 'gfh',
          email: 'jkh@fs.dgdf',
          password: 'LfslqMLEeILHfwqoCIQ+bNrQS2rUEJE6HJfBb9pk9H3PGUF8XDqIMQp5qEDUQKk345EQCBWfW8LSDTyb4O7riw=='

         
        })
        .then( function() {
          // Account created, redirect to home
          $location.path('/');
        })
        .catch( function(err) {
          err = err.data;
          $scope.errors = {};

          // Update validity of form fields that match the mongoose errors
          angular.forEach(err.errors, function(error, field) {
            form[field].$setValidity('mongoose', false);
            $scope.errors[field] = error.message;
          });
        });
      
    };

    $scope.deleteKeyword = function(keyword) {
      $http.delete('/keyword/' + keyword._id);
    };

});
