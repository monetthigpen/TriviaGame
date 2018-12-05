var Quiz = {
    QA: [{
       question: "Who was the main villian in Avengers Infinity Wars?",
       answerChoices: ["Loki","Ultron","Thanos", "Magneto"],
       answer:"Thanos",
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
        
    }]
    
};
var ansList = [];
function question1(){
    var q1= 
        $("#q1").text(Quiz.QA[0].question);
        
        $("#button").append("<li<button> " + Quiz.QA[0].answerChoices[0] + "</button>/>");
        $("#button").append("<li<button> " + Quiz.QA[0].answerChoices[1] + "</button>/>");
        $("#button").append("<li<button> " + Quiz.QA[0].answerChoices[2] + "</button>/>");
        $("#button").append("<li<button> " + Quiz.QA[0].answerChoices[3] + "</button>/>");
        
        // $("#button").append("<button> " + Quiz.QA[0].a1 + "</button>");
        // $("#button").append("<button>" + Quiz.QA[0].a2 + "</button>");
        // $("#button").append("<button>" + Quiz.QA[0].a3 +"</button>");
        // $("#button").append(Quiz.QA[0].a4);

  
        console.log(Quiz.QA[0].question);
    //setTimeout(q1, 30000)
} question1();
// a1: "Loki",
// a2:"Ultron",
// a3: "Thanos",
// a4: "Magneto",