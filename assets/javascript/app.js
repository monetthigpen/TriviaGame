var Quiz = [{
       question: "Who was the main villian in Avengers Infinity Wars?",
       answerChoices: ["Loki","Ultron","Thanos", "Magneto"],
       answer: 2,
    },{
        question: "Who is the richestest hero in the Marvel Cinematic Universe?",
        a1:"Iron Man",
        a2:"Black Panther",
        a3:"Captian America",
        a4:"Professor X",
        answer:"Black Panther",
    },{
        question: "Who is the strongest Avenger?",
        a1:"The Hulk",
        a2:"Captian America",
        a3:"Black Widow",
        a4:"Scarlet Witch",
        answer:"Black Panther",
    },{
        question: "Who is the most powerful Mutant from X-Men?",
        a1:"Rogue",
        a2:"Jean Grey",
        a3:"Proessor X",
        a4:"Nate Grey",
        answer:"Black Panther",
    },{
        question:"Who is the most powerful Marvel villian?",
        a1:"Kigpin",
        a2:"Thanos",
        a3:"Green Goblin",
        a4: "Doctor Doom",
        answer:"Black Panther",
        
    }];
var ansList = [];
var pageTimeout;
function question1(){
    
        $("#q1").text(Quiz[0].question);
    
        for(var i = 0; i< Quiz[0].answerChoices.length; i++){
            $("#button").append("<button> " + Quiz[0].answerChoices[i] + "</button>");
             
        }
        $("#q1").text(Quiz[1].question);

    for(var i = 0; i< Quiz[1].answerChoices.length; i++){
        $("#button").append("<button> " + Quiz[1].answerChoices[i] + "</button>");
         
    }
    $("#q1").text(Quiz[2].question);

    for(var i = 0; i< Quiz[2].answerChoices.length; i++){
        $("#button").append("<button> " + Quiz[2].answerChoices[i] + "</button>");
         
    }
    $("#q1").text(Quiz[3].question);

    for(var i = 0; i< Quiz[3].answerChoices.length; i++){
        $("#button").append("<button> " + Quiz[3].answerChoices[i] + "</button>");
         
    }
    $("#q1").text(Quiz[4].question);

    for(var i = 0; i< Quiz[4].answerChoices.length; i++){
        $("#button").append("<button> " + Quiz[4].answerChoices[i] + "</button>");
         
    }
        // $("#button").on("click", function(event){
        //     if(Quiz[0].answerChoices === 2){
        //         $("#button").text("You are Correct!!!");
        //         console.log("correct")
        //     }
        //     console.log(Quiz[0].answer)
        //     console.log(Quiz[0].answerChoices)

        // })
        
} question1();
//function rightWrong()
