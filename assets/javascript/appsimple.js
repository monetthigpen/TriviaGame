var Quiz =  [{
    question: "Who was the main villian in Avengers Infinity Wars?",
    choices: ["Loki","Ultron","Thanos", "Magneto"],
    answer:2
 },{
     question:"Who is the richestest hero in the Marvel Cinematic Universe?",
     choices:["Iron Man","Black Panther","Captian America","Professor X"],
     answer: 1
 },{
     question: "Who is the strongest Avenger?",
     choices:["The Hulk","Captian America","Black Widow","Scarlet Witch"],
     answer : 0
 },{
     question: "Who is the most powerful Mutant from X-Men?",
     choices : ["Rogue","Jean Grey","Professor X","Nate Grey"],
     answer: 3
 },{
     question:"Who is the most powerful Marvel villian?",
     choices:["Kigpin","Thanos","Green Goblin","Doctor Doom"],
     answer: 1
     
 }];
var correct = 0;
var wrong = 0;
var timer = 60;
var timerID;
//create a function that holds all the questions and their buttons.
function run() {
    clearInterval(timerID);
    timerID = setInterval(decrement, 1000);
    
}
function decrement() {
    timer--;
    $("#timer").html("<h2>" + timer + "</h2>");
    if (timer === 0) {
      stop();
      $("#Correct").html("Correct Answers: " + correct);
      $("wrong").html("Wrong Ansers: " + wrong)

    }
}
function stop() {
    clearInterval(timerID);
}run();

function question1(){
    
    $("#q1").text(Quiz[0].question);

    for(var i = 0; i < Quiz[0].choices.length; i++){
        $("#bt1").append("<button> " + Quiz[0].choices[i] + "</button>");
        $("#bt1").on("click", function(){
            if ( Quiz[0].choices.indexOf() !== 2 ) {
                wrong++;
                console.log(wrong)
            } else {
                console.log('right ');
                correct++;
            }
        })
            
    
         
    }
    $("#q2").text(Quiz[1].question);

    for(var i = 0; i< Quiz[1].choices.length; i++){
        $("#bt2").append("<button> " + Quiz[1].choices[i] + "</button>");
         
    }
    $("#q3").text(Quiz[2].question);

    for(var i = 0; i< Quiz[2].choices.length; i++){
        $("#bt3").append("<button> " + Quiz[2].choices[i] + "</button>");
         
    }
    $("#q4").text(Quiz[3].question);

    for(var i = 0; i< Quiz[3].choices.length; i++){
        $("#bt4").append("<button> " + Quiz[3].choices[i] + "</button>");
         
    }
    $("#q5").text(Quiz[4].question);

    for(var i = 0; i< Quiz[4].choices.length; i++){
        $("#bt5").append("<button> " + Quiz[4].choices[i] + "</button>");
         
    }

    
}question1();


//Create a function that holds a conditional for correct or incorrect answers.
//a win when the button in the array === the answer
//Create a timeout function.

// When the time is out display the number of correct and incorrect answers.