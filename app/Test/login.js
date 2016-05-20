/**
 * Created by shuaili on 16/5/19.
 */

var app = angular.module('login_app', []);

app.controller('login_ctrl', function ($scope) {
    $scope.name = "adminiStrator is the big on in backEnd."
});

app.factory('TextUtils', function () {
    var factory = {};

    factory.firstLetterUppercase = function (input) {
        alert("Hello");
        return input.charAt(0).toUpperCase() + input.substr(1);
    };
});

app.filter('firstLetterUppercase', function () {
    return function (input) {
        var strs = input.split(' ');
        var str = '';

        for (var i = 0, len = strs.length; i < len; i++) {
            var tmp = strs[i];
            // if (tmp.length == 0) {
            //     continue;
            // }

            str += tmp.charAt(0).toUpperCase() + tmp.substr(1).toLowerCase() + " ";
        }
        return str;
    };
});

