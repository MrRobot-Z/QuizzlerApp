/**
 * Created by M.Zaher on 7/29/2018.
 */


quizzlerApp.controller("SubmitController", function ($scope, DataBaseFactory) {
    $scope.fullmark = DataBaseFactory.questions.length;

    $scope.result = 0;

    for (q in DataBaseFactory.questions){

        console.log(q);
        console.log(DataBaseFactory.questions[q]);

        var questionResult = DataBaseFactory.selectedAnswers.find(function (element) {
            return element.id_q === DataBaseFactory.questions[q].id;
        });

        if(questionResult){
            if(DataBaseFactory.questions[q].correctAnswer === questionResult.id_a) {
                $scope.result++;
            }
        }
    }
});