//made for 24code07.html
var counter = 0;
liveClock(); // calling my clock function

// call Update function 2 seconds after first load
timeoutID = window.setTimeout("Update();", 2000);

function Update() 
{
    counter++;
    var textField = document.getElementById("showText");
    textField.innerHTML = "The counter is now at " + counter;

    //set another timeout for the next count
    timeoutID = window.setTimeout("Update();", 2000);
}

//set event listeners for the buttons
document.getElementById("restart").addEventListener("click", function () 
{
    counter = 0;
    Update();
} );
document.getElementById("stop").addEventListener("click", function () 
{
    window.clearTimeout(timeoutID);
} );


function liveClock() //live clock function
{
    showClock = new Date().toLocaleTimeString(); //using localetime
    document.getElementById("showClock").innerHTML = showClock;
    setTimeout(liveClock, 1000); //included timeout
}