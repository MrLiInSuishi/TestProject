/**
 * Created by shuaili on 16/5/18.
 */

var app = angular.module('myApp', ['ngRoute']);

// app.value('Hello', "value -> Hello");
// app.constant("HelloWorld", "constant -> HelloWorld!");
//
// app.factory('SquareFactory', function () {
//     var factory = {};
//     factory.multiply = function (a, b) {
//         return a * b;
//     }
//
//     return factory;
// });
//
// app.service('square', function (SquareFactory) {
//     this.sq = function (x) {
//         return SquareFactory.multiply(x, x);
//     }
// });
//
// app.filter('nameFormat', ['sayHello', function (sayHello) {
//     return sayHello.say();
// }]);

app.config(['$routerProvider', function ($routerProvider) {
    $routerProvider
        .when('/', {template : 'First Page ->'})
        .when('/MrLi', {template : 'Page 4 MrLi ->'})
        .otherwise({redirectTo : '/'});
}]);

// app.config(function ($provide) {
//     $provide.provider('$routerProvider', function ($routerProvider) {
//         $routerProvider
//             .when('/', {template : 'first Page'})
//             .when('/MrLi', {template : 'This is the Page 4 MrLi'})
//             .when('/BHL', {template : 'This is the Page 4 BHL'})
//             .otherwise({redirectTo : '/'});
//     });
// });

// app.config(function ($provide) {
//    $provide.provider('MathService', function (HelloWorld) {
//        this.$get = function () {
//            var factory = {};
//
//            factory.multiply = function (a, b) {
//                return a * b;
//            };
//
//            factory.show = function () {
//                return HelloWorld;
//            };
//
//            return factory;
//        };
//
//    });
// });


// app.controller('helloCtrl', function ($scope) {
//    $scope.name = '123';
//    $scope.greeting = '12';
//    $scope.age = 23;
//    $scope.selectNames = [{name:'MrLi',age:34}, {name:'HelloMrLi',age:25}, {name:'LiShuai',age:22}, {name:'SwainLi',age:21}];
//    $scope.cars = {car1 : {brand:'Ford', color:'Red'}, car2 : {brand:'Benz', color:'black'}};
//    $scope.mySwitch = true;
//    $scope.posted =false;
//    $scope.clickS = function () {
//        $scope.mySwitch = !$scope.mySwitch;
//    };
//    $scope.postForm = function () {
//        $scope.posted = true;
//    }
// });

// app.directive("testDirective", function () {
//     return {
//         restrict : "CA",
//         template : "<h1>I am testDirective</h1>"
//     };
// });