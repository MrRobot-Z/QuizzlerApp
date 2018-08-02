/**
 * Created by M.Zaher on 7/26/2018.
 */

'use strict';

var quizzlerApp = angular.module("QuizzlerApp", ["ngRoute"]);

quizzlerApp.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl: "templates/questionsViewer.html",
        controller: "QuestionViewerController"
    });

    $routeProvider.when("/submit", {
        templateUrl: "templates/submit.html",
        controller: "SubmitController"
    });

    $routeProvider.otherwise({redirectTo: '/'});

}
);
