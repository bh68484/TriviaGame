$(document).ready(function() {
    //Global Variables
    var quiz = 10;
    var right = 0;
    var wrong = 0;
    var questionIndex = 0;
    var count = 30;
  
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
})