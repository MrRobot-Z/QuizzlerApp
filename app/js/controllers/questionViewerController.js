/**
 * Created by M.Zaher on 7/26/2018.
 */

'use strict';


quizzlerApp.controller("QuestionViewerController",
    function QuestionViewerController($scope) {


        $scope.questions = [
            {
                "QuestionText" : "QQQQ QQQQQ QQQQQQ QQQQQQ QQQQQ QQQQQQ QQQQQQQQQ QQQQQ QQQQQ QQQQQQQ  QQQQQ QQQQQQQQQ QQQQQQ1",
                "Answers" : [
                    {
                        "id": 1,
                        "text": "AAAA AAAAAA AAAAAAAA AAAAAAAAAA AAAAAAAAAAAA AAAAAAAAA AAAAAAAAAA AAAAAAAA AAAAAAAA AAAAAAAA1"
                    },
                    {
                        "id": 2,
                        "text": "BBBBBB BBBBBBB BBBBBB1"
                    },
                    {
                        "id": 3,
                        "text": "CCCCCCC CCCCCCCC CCCCCCC1"
                    },
                    {
                        "id": 4,
                        "text": "DDDDD DDDDDDDDD DDDDDD DDD1"
                    }
                ]
            },
            {
                "QuestionText" : "QQQQ QQQQQ QQQQQQ QQQQQQ QQQQQ QQQQQQ QQQQQQQQQ QQQQQ QQQQQ QQQQQQQ  QQQQQ QQQQQQQQQ QQQQQQ2",
                "Answers" : [
                    {
                        "id": 1,
                        "text": "AAAA AAAAAA AAAAAAAA AAAAAAAAAA AAAAAAAAAAAA AAAAAAAAA AAAAAAAAAA AAAAAAAA AAAAAAAA AAAAAAAA2"
                    },
                    {
                        "id": 2,
                        "text": "BBBBBB BBBBBBB BBBBBB2"
                    },
                    {
                        "id": 3,
                        "text": "CCCCCCC CCCCCCCC CCCCCCC2"
                    },
                    {
                        "id": 4,
                        "text": "DDDDD DDDDDDDDD DDDDDD DDD2"
                    }
                ]
            }
        ]

    }
);
