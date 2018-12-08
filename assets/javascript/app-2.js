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
        choices : ["Rogue","Jean Grey","Proessor X","Nate Grey"],
        answer: 3
    },{
        question:"Who is the most powerful Marvel villian?",
        choices:["Kigpin","Thanos","Green Goblin","Doctor Doom"],
        answer: 1
        
    }];
//create a function to show the questions
//create function to show answer choices
function displayQA(){
    var solutions = 
    $("#q1").text(Quiz[0].question)
    for( var i = 0; i < Quiz[0].choices.length;i++){
        console.log(Quiz[0].choices[i]);
        var a = $("<button class = 'button'>");
         a.attr(Quiz[0].Choices[i]);
         a.text( Quiz[0].answerChoices[i]);
         $(".button").append(a);
        // console.log(a);


    }
}displayQA();