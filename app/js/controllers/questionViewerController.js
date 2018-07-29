/**
 * Created by M.Zaher on 7/26/2018.
 */

'use strict';


quizzlerApp.controller("QuestionViewerController",
    function QuestionViewerController($scope, DataBaseFactory) {


        $scope.questions = DataBaseFactory.questions;

    }
);
