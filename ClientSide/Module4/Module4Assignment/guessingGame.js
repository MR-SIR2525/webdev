//guessingGame.js
//Generates a random number. This will check if user guesses the number generated

//Default game settings
var defaultNumberCap = 100; //custom settings can change this
var defaultAttempts = 10; //custom settings can change this

//Game variables
var numberCap = defaultNumberCap;
var attemptsRemaining = defaultAttempts;
//
var guessCounter = 0;

//generating the first random number
randomNum = Math.floor(Math.random() * numberCap + 1); 
updateNumberCap();
updateAttemptsRemaining();

function checkGuess()
{
    // Get the user's guess from the text field
    myGuess = document.theform.guessEntry.value;
    attemptsRemaining -= 1;
    guessCounter += 1;

    if (attemptsRemaining == 0 && myGuess != randomNum) //user didn't win here
    {   
        document.getElementById("instructions").innerHTML = "You ran out of guesses! Sorry! It was " + 
            randomNum + "." + "<br><br><button onclick=\"resetGame()\">New Game?</button>";
        document.getElementById("result").innerText = "";
        document.theform.style.display = "none";
    }
    else
    {
        if (myGuess == randomNum) //user wins 
        {
            document.getElementById("instructions").innerHTML = "Congratulations! It was " + randomNum + 
            ". It took you " + guessCounter + " tries. " + 
            "<br><br><button onclick=\"resetGame()\">Play Again?</button>";
            document.getElementById("result").innerText = "";
            document.theform.style.display = "none";
        }
        else if (myGuess < randomNum) //guess is too low
        {
            document.getElementById("result").innerText = "Too low. Try again. ";
            updateAttemptsRemaining();
        }

        else if (myGuess > randomNum) //guess is too high
        {
            updateAttemptsRemaining();
            document.getElementById("result").innerText = "Too high. Try again. ";
        }

        else
        {
            document.getElementById("result").innerText = "Too high. Try again. ";
            document.getElementById("result").innerText = "Something went wrong. Your guess is " +
                            "simultaneously not higher and not lower than my number... What did you do?"
        }
    }
    

    //clear the input box
    document.getElementById("inputField1").value = "";
}

function updateAttemptsRemaining() {
    document.getElementById("attemptsRemaining").innerText = attemptsRemaining;
}
function updateNumberCap() {
    document.getElementById("numberCap").innerText = numberCap;
}

function resetGame()
{
    //reverts the instructions back and brings back the form
    document.theform.style.display = "unset";
    document.getElementById("instructions").innerHTML = "What number am I thinking of? It's something "
        + "1-<span id=\"numberCap\">-</span>. You have <span id=\"attemptsRemaining\">-</span> guesses. "
        + "<span id=\"debuggy\"> </span>";

    attemptsRemaining = defaultAttempts;
    numberCap = defaultNumberCap

    guessCounter = 0;    
    randomNum = Math.floor(Math.random() * numberCap + 1);
    document.getElementById("result").innerText = "";

    updateNumberCap();
    updateAttemptsRemaining();
}

function resetGameCustom()
{
    //user settings getting stored after verification
    let tempAttempts = document.getElementById("settingMaxAttempts").value;
    if (! (tempAttempts > 0))
        defaultAttempts = 10;
    else 
        defaultAttempts = tempAttempts;

    let tempNumberCap = document.getElementById("settingNumberCap").value;
    if (! (tempNumberCap > 10))
        defaultNumberCap = 100;
    else
        defaultNumberCap = tempNumberCap;

    resetGame(); //variables and instructions reset. New random number generated.

    document.getElementById("result").innerText = "New game created with your settings.";

    document.getElementById('settingsForm').style.display = "none";
}       

//toggle for showing game settings
function showSettings()
{
    let settingsForm = document.getElementById('settingsForm').style.display;
    
    if (settingsForm == "block")
        document.getElementById('settingsForm').style.display = "none";
        
    else
        document.getElementById('settingsForm').style.display = "block";
}

