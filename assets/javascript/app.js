$(document).ready(function() {
    //Global Variables
    var quiz = 10;
    var right = 0;
    var wrong = 0;
    var questionIndex = 0;
    var counter = 20;
    var Clock;


    //Array with wrong images
    //Not set up
    // var wrongImages = ["images/wrong1.gif", "images/wrong2.gif", "images/wrong3.gif", "images/wrong4.gif", "images/wrong5.gif", "images/wrong6.gif", "images/wrong7.gif", "images/wrong8.gif", "images/wrong9.gif", "images/wrong10.gif"];


    //Questions and answers set to an array
    var questions = [{
        question: "Where did the Wright Brothers make the first controlled power airplane flight?",
        choices: ["Nags Head", "Hatteras Island", "Wilmington", "Kitty Hawk"],
        answer: 3
    }, {
        question: "What carnivorous plant is native to the subtropical wetlands in North Carolina?",
        choices: ["Tropical Pitcher Plant", "Venus Fly Trap", " Corkscrew Plant", "Sundew Plant"],
        answer: 1
    }, {
        question: "This Interstate Highway runs across the United States from Wilmington, NC to Barstow, CA",
        choices: ["I-73", "I-26", "I-85", "I-40"],
        answer: 3
    }, {
        question: "Which city is the largest in North Carolina?",
        choices: ["Raleigh", "Charlotte", "Greensboro", "Durham"],
        answer: 1
    }, {
        question: "How many counties are in North Carolina?",
        choices: ["78", "90", "100", "50"],
        answer: 2
    }, {
        question: "What is North Carolina's Highest point in elevation?",
        choices: ["Grandfather Mountain", "Blowing Rock", "Pilot Mountain", "Mount Mitchell"],
        answer: 3
    }, {
        question: "The USS North Carolina was dedicated as a memorial and museum in which city?",
        choices: ["Southport", "Wilmington", "New Bern", "Beaufort"],
        answer: 1
    }, {
        question: "This lighthouse was moved 2,900 feet inland due to coastal erosion.",
        choices: ["Bodie Island Lighthouse", "Price Creek Lighthouse", "Ocracoke Lighthouse", "Cape Hatteras Lighthouse"],
        answer: 3
    }, {
        question: "The waters off the North Carolina coast are often called what due to the numerous shipwrecks?",
        choices: ["Shipwreck Bay", "The Deadly Shoals", "Graveyard of the Atlantic", "Atlantic Triangle"],
        answer: 2
    }, {
        question: "What popular soda was invented in 1898 in New Bern, NC?",
        choices: ["Cheerwine", "Pepsi", "Dr. Pepper", "Coca-Cola"],
        answer: 1
    }]


    console.log(questions);
    //Loads the question and sets the answer choices to the multiple choice buttons
    $("#0, #1, #2, #3").hide();

    function loadQuestion() {
        if (questionIndex < questions.length) {
            //Displays the question on the page
            $('#questions').html(questions[questionIndex].question);
            $("#0, #1, #2, #3").show();
            //Displays multiple choices
            $("#0").text(questions[questionIndex].choices[0]);
            $("#1").text(questions[questionIndex].choices[1]);
            $("#2").text(questions[questionIndex].choices[2]);
            $("#3").text(questions[questionIndex].choices[3]);
        } else if (counter === 0) {
            $("#quiz, #timer").hide("slow");
            $("#results").show("slow");
            scoreCount();
        } else {
            $("#quiz, #timer").hide("slow");
            $("#results").show("slow");
            scoreCount();
        }
    };

    //Checks multiple choice buttons if right or wrong - adds either to right or wrong counter.
    $(".answerChoices").click(function() {
        userGuess = $(this).attr("id");
        //check for correct answer
        if (userGuess == questions[questionIndex].answer) {
            correct = right++;
            console.log(correct + " correct");

        } else {
            incorrect = wrong++;
            console.log(incorrect + " incorrect");
            questions[questionIndex].answer
        }
        questionIndex++;
        loadQuestion();
    });

    //Function to show the number of right and wrong answers after the end of the game.
    function scoreCount() {
        $('#correct').html(" " + right);
        $('#incorrect').html(" " + wrong);
    }

    //Results are hidden until the game is over
    $("#quiz, #results").hide();


    //When the start button is clicked - it will hide and show the questions and choices.
    $("#play").click(function() {
        $("#start").hide("slow");
        $("#quiz").show("slow");
        loadQuestion();
        countdownClock();


        //Sets up timer to show 30 seconds on the clock.
        function countdownClock() {
            Clock = setInterval(thirtySeconds, 1000);

            function thirtySeconds() {
                if (counter === 0) {
                    clearInterval(Clock);

                }
                if (counter > 0) {
                    counter--;
                }
                $("#countdown").html(counter);
            }
        }

        //Restart button shown at the end of the game - allows user to click and restart the game over.
        $("#restart").click(function() {
            location.reload();
        });


    })
})