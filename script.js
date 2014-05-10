 confirm("Please understand this game was practice using JS If/Then conditional statements. Therefore, do not expect to play a full game but something that utilizes conditional statements, prompts, variables, and other coding techniques as a way of learning JavaScript --- Anthony908")
 confirm("Click 'Okay' to start playing");
var age = prompt("How old are you?");
var yrs = 13-age; 
if ( age<13 )
{
    console.log("I am sorry but you are too young due to the mature content of this game. Come back when you are old enough.");
}
else 
{
    console.log("Awesome! This is the story...");
}

console.log("You are at a Justin Bieber concert, and you hear this lyric 'Lace my shoes off, start racing.'");
console.log("Suddenly, Bieber stops and says, 'Who wants to race me?'");
var userAnswer = prompt("Would  you like to race Bieber on stage?");
if(userAnswer === "yes") 
{
    console.log("You get up on stage. You and Bieber start to race. It's neck and neck! You win by a shoelace!");
}
else
{
    console.log("Oh no! Bieber shakes his head and continues singing 'I set a pace, so I can race without pacing.'");
}

var feedback = prompt("Please rate this game 1-10");
if(feedback>=8)
{
    console.log("Thank You! We should race at the next concert!");
}
else
{
    console.log("I'll have to practice my coding and racing to keep up with your standards...");
}
