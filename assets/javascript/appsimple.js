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
var noAnswer = 0;
var timer = 30;
var timerID;
//create a function that holds all the questions and their buttons.
function run() {
    clearInterval(timerID);
    timerID = setInterval(decrement, 1000);
    
}
function decrement() {
    timer--;
    $("#timer").html("<h2>" + timer + "</h2>");
    if (timer === 0 ) {
      stop();
      $("#Correct").html("Correct Answers: " + correct);
      $("#wrong").html("Wrong Answers: " + wrong);

    }
}
function stop() {
    clearInterval(timerID);
}run();

function question1(){
    
    $("#q1").text(Quiz[0].question);

    for(var i = 0; i < Quiz[0].choices.length; i++){
        var choice = "<button class=' btn btn-danger m-1 choice'>" + Quiz[0].choices[i] + "</button>";
        $("#bt1").append(choice);  
    }
    $(document).on("click",".choice",function(){
        
        if($(this).text() === "Thanos"){
            correct++;
            $("Correct").text(correct);
        }
        else{
            wrong++;
            $("wrong").text(wrong);
        }
    })

}question1();
function question2(){
    
    $("#q2").text(Quiz[1].question);

    for(var b = 0; b < Quiz[1].choices.length; b++){
        var choice2 = "<button class=' btn btn-danger m-1 choice2'>" + Quiz[1].choices[b] + "</button>";
        $("#bt2").append(choice2);  
    }
    $(document).on("click",".choice2",function(){
        
        if($("#bt2").text() === "Black Panther"){
            correct++
            $("Correct").text(correct);
        }
        else{
            wrong++;
            $("wrong").text(wrong);;
        }
        
    })

}question2();
function question3(){
    
    $("#q3").text(Quiz[2].question);

    for(var c = 0; c < Quiz[2].choices.length; c++){
        var choice3 = "<button class=' btn btn-danger m-1 choice3'>" + Quiz[2].choices[c] + "</button>";
        $("#bt3").append(choice3);  
    }
    $(document).on("click",".choice3",function(){
        
        if($(this).text() === "The Hulk"){
            correct++;
            $("Correct").text(correct);
        }
        else{
            wrong++;
            $("wrong").text(wrong);
        }
    })

}question3();
function question4(){
    
    $("#q4").text(Quiz[3].question);

    for(var d = 0; d < Quiz[3].choices.length; d++){
        var choice4 = "<button class=' btn btn-danger m-1 choice4'>" + Quiz[3].choices[d] + "</button>";
        $("#bt4").append(choice4);  
    }
    $(document).on("click",".choice4",function(){
        
        if($(this).text() === "Nate Grey"){
            correct++
            $("Correct").text(correct);
        }
        else{
            wrong++;
            $("wrong").text(wrong);
        }
    })

}question4();
function question5(){
    
    $("#q5").text(Quiz[4].question);

    for(var e = 0; e < Quiz[4].choices.length; e++){
        var choice5 = "<button class=' btn btn-danger m-1 choice5'>" + Quiz[4].choices[e] + "</button>";
        $("#bt5").append(choice5);  
    }
    $(document).on("click",".choice5",function(){
       
        if($(this).text() === "Nate Grey"){
            correct++
            $("Correct").text(correct);
        }
        else{
            wrong++;
            $("wrong").text(wrong);
        }
    })

}question5();


   

    



//Create a function that holds a conditional for correct or incorrect answers.
//a win when the button in the array === the answer
//Create a timeout function.

// When the time is out display the number of correct and incorrect answers.