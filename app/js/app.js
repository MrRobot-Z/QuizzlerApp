/**
 * Created by M.Zaher on 7/26/2018.
 */

'use strict';

var quizzlerApp = angular.module("QuizzlerApp", ["ngRoute"]);

quizzlerApp.config(function ($routeProvider) {
    $routeProvider.when("/questions",{
        templateUrl: "/templates/questionsViewer.html",
        controller: "QuestionViewerController"
    });
    $routeProvider.otherwise({redirectTo: '/questions'});
}
);
