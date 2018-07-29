/**
 * Created by M.Zaher on 7/26/2018.
 */

'use strict';


quizzlerApp.controller("QuestionViewerController",
    function QuestionViewerController($scope, DataBaseFactory) {


        $scope.questions = DataBaseFactory.questions;


        $scope.selected = function(question, ans){
            var result = DataBaseFactory.selectedAnswers.find(function (element) {
               return element.id_q === question.id;
            });
            if (result){
                result.id_a = ans.id;
            } else {
                DataBaseFactory.selectedAnswers.push({
                    id_q: question.id,
                    id_a: ans.id
                });
            }
        };

        $scope.mprint = function(){
            console.log(DataBaseFactory.selectedAnswers);
        }
    }
);
