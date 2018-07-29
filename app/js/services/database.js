/**
 * Created by M.Zaher on 7/29/2018.
 */

quizzlerApp.factory("DataBaseFactory", function () {

    var factory = {};

    factory.questions = [
        {
            "id": 1,
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
            "id": 2,
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
    ];


    return factory;
});