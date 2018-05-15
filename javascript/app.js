$(document).ready(function() {
    // Handler for .ready() called.

    var selection;

    var triviaQandA = [{
            "question": "Make a website accessible to users with disabilities by including:",
            "answers": ["Internal Links", "Rich Media", "Image and Media Alternatives", "None of the above"],
            "correct": "Image and Media Alternatives",
            "response": "Creating image and media ALT tags is helpful to users with disabilities."
        },
        {
            "question": "Which of the following metrics best measures the success of an initiative designed to drive guest acquisition?",
            "answers": ["Week 1 retention rate", "Shares", "Click through rate", "Net Promoter Score"],
            "correct": "Click through rate",
            "response": "Click through rate is the best measurement in this phase of the journey."
        },
        {

            "question": "Which of the following best describes 'Earned Media'?",
            "answers": ["Includes your website", "Deemed by consumers as unbiased info", "It includes display advertising", "All of the above"],
            "correct": "Deemed by consumers as unbiased info",
            "response": "The value of this media is the consumers perception that the info is NOT driven by your marketing department."
        },
        {
            "question": "Which of the following metrics should be used in email marketing campaigns?",
            "answers": ["Bounce rate", "Delivery rate", "Read rate", "All of the above"],
            "correct": "All of the above",
            "response": "All are good metrics, and of course open rate too."
        },
        {
            "question": "For which property is a vanity site most likely needed to supplement its brand.com presence??",
            "answers": ["branded site with an odd ratio of meeting to room space", "branded location near a strong demand generator",
             "branded resort in a primary market", "All of the above"],
            "correct": "All of the above",
            "response": "All of those examples might be able to build a strong case for a vanity site."
        }
        
            

    ];

    var questionIndex = 0;
    var correctAnswer = 0;
    var wrongAnswer = 0;
    var timeOutAnswer = 0;

    //Timer program
    var interValID;
    var timeLeft = 20
    var counter = 0;
    var timer = $("#timer");

    function timeIt() {
        
        timer.html("<h2>You have " + (timeLeft - counter) + " seconds left</h2>");
        if (counter == timeLeft) {
            timer.html("<h2>Your time is up!</h2>");
            clearInterval(interValID);
            $("#response").show();
            $("#response").html("You ran out of time. " + selection.response);
            timeOutAnswer++;
            //checkEnd();
        }
        counter++
    }


    $("#startGame").click(function() {
        timer.html("<h2>Starting timer...</h2>")
        getQuestion();
    });

    function showProgress() {
        var currentQuestionNumber = questionIndex + 1;
        var element = $("#progress");
        element.text("Question " + currentQuestionNumber + " of " + triviaQandA.length);

    }

    function getQuestion() {
        //var a = 0;

        $("#startTheGame").hide();
        $("#startGame").hide();
        $("#response").hide();
        $(".grid").show();
        interValID = setInterval(timeIt, 1000);
        selection = triviaQandA[questionIndex];
        $("#question").html(selection.question);
        console.log(question);

        for (var i = 0; i < selection.answers.length; i++) {
            btn = $("button#btn" + [i]).text(selection.answers[i]);


        }
        showProgress();
    }


    $("button").click(function() {
        var choice = $(this).text();



        checkAnswer(choice);

    });



    function checkAnswer(choice) {

        if (choice === selection.correct) {
            correctAnswer++
            $("#response").show();
            $("#response").html("Way to go!  You are correct! " + selection.response);

        } else {
            wrongAnswer++
            $("#response").show();
            $("#response").html("Oops, you are incorrect! " + selection.response);
        }

        
        
        clearInterval(interValID);

        checkEnd();


    }

    function showResults() {
        $(".grid").hide();
        $("#resultsCorrect").show();
        $("#resultsCorrect").html("# of Correct Answers = " + correctAnswer) 
        $("#resultsIncorrect").show();
        $("#resultsIncorrect").html("# of Incorrect Answers = " + 
            wrongAnswer)
        $("#resultsTimedOut").show();
        $("#resultsTimedOut").html("# of Timed Out = " + timeOutAnswer );
        $("#resultsTwo").show();
    }

    function checkEnd() {
            questionIndex++;
            if (questionIndex === (triviaQandA.length)){
               
            setTimeout(showResults, 3000);
            } else  {
                counter=0;
                
                setTimeout(getQuestion, 3000);

            }
    }

});