/**
 * Created by shuaili on 16/5/19.
 */

var liTree = angular.module('liTree', []);

liTree.controller('treeCtrl', function ($scope, $http) {
    $scope.handleModify = function () {
        alert("e");
    };
    $scope.name = 'Hello';
    $scope.data = {name:'Parent', children : [
        {name:'Child1'}, {name:'Child2', children : [
            {name:'GrandChild', children : [{name:'grandGrandChild', children : [{name : 'grandGrandGrandChild'}]}]}
        ]}, {name:'Child3'}
    ]};
    $scope.res;
    $scope.askForBanks = function () {
        // alert("hello");
        // $http.jsonp("http://127.0.0.1:8888?callback=JSON_CALLBACK").success(function (data) {
        //    alert(data);
        //     $scope.res = data;
        // }).error(function () {
        //     alert("ERROR");
        // });
        // $http.get("http://127.0.0.1:8888").success(function (data) {
        //     alert("success1");
        // }).error(function (data) {
        //     alert("error1");
        // });
        
        // $http.jsonp("http://192.168.10.31:8888?callback=JSON_CALLBACK").success(function (data) {
        $http.jsonp("http://127.0.0.1:8888?callback=JSON_CALLBACK").success(function (data) {
            // alert("JSONP Success" + data);
            console.log(data);
            $scope.res = data;
        }).error(function (data) {
            alert("JSONP Error1");
        });
    };
});

liTree.directive("tree", function($compile) {
    return {
        restrict: "E",
        scope: {family: '='},
        templateUrl:'node.html',
        // template:
        // '<div>' +
        // '  <h3>{{ family.entity.fullName }}</h3><button ng-click="handleModify()">Modify</button><br>' +
        // '</div>'+
        // '<ul>' +
        // '<li ng-repeat="child in family.children">' +
        // '<tree family="child"></tree>' +
        // '</li>' +
        // '</ul>',
        compile: function(tElement, tAttr) {
            var contents = tElement.contents().remove();
            var compiledContents;
            return function(scope, iElement, iAttr) {
                if(!compiledContents) {
                    compiledContents = $compile(contents);
                }
                compiledContents(scope, function(clone, scope) {
                    iElement.append(clone);
                });
            };
        }
    };

});