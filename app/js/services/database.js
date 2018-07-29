/**
 * Created by M.Zaher on 7/29/2018.
 */

quizzlerApp.factory("DataBaseFactory", function () {

    var factory = {};

    factory.questions = [
        {
            id: 1,
            QuestionText : "Who won the 2014 Fifa World Cup",
            Answers : [
                {
                    id: 1,
                    text: "Argentine"
                },
                {
                    id: 2,
                    text: "France"
                },
                {
                    id: 3,
                    text: "Germany"
                },
                {
                    id: 4,
                    text: "Spain"
                }
            ],
            correctAnswer: 3
        },
        {
            id: 2,
            QuestionText : "In Batman Comics who is the third Robin",
            Answers : [
                {
                    id: 1,
                    text: "Grayson"
                },
                {
                    id: 2,
                    text: "Todd"
                },
                {
                    id: 3,
                    text: "Tim"
                },
                {
                    id: 4,
                    text: "Damyen"
                }
            ],
            correctAnswer: 3
        },
        {
            id: 3,
            QuestionText : "In Sherlock Holmes literature, what is the name of his fellow doctor",
            Answers : [
                {
                    id: 1,
                    text: "Dr.Wilson"
                },
                {
                    id: 2,
                    text: "Dr.Watson"
                },
                {
                    id: 3,
                    text: "Dr.Thomson"
                }
            ],
            correctAnswer: 2
        },
        {
            id: 4,
            QuestionText : "In attack on titan anime, what is the name of the protagonist",
            Answers : [
                {
                    id: 1,
                    text: "Eren"
                },
                {
                    id: 2,
                    text: "Armin"
                },
                {
                    id: 3,
                    text: "Arwin"
                },
                {
                    id: 4,
                    text: "Levi"
                },
                {
                    id: 5,
                    text: "Mikasa"
                }
            ],
            correctAnswer: 1
        }
    ];

    factory.selectedAnswers = [
    ];


    return factory;
});