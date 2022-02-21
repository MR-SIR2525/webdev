var a = Math.floor(Math.random() *10);
var b = Math.floor(Math.random() *10);

// window.onload = function()
// {
//     document.getElementById('showMessage').innerHTML = "What is ";
//     document.getElementById('num1').innerHTML = a;
//     document.getElementById('num2').innerHTML = b;
// }
window.onload = function()
{
    document.getElementById('showMessage').innerHTML = "What is ";
    document.getElementById('num1').innerHTML = a;
    document.getElementById('num2').innerHTML = b;
}

function checkAnswer() 
{
    attempts = 0;
    var answer = a * b;
    var guess = "";

    do 
    {
        
        guess = document.getElementById('guess').value;

        if (guess == answer)
        {
            document.getElementById('response').innerText = "Your answer is correct";
        }
        else if (guess != answer)
        {
            document.getElementById('response').innerText = "Sorry, that's not right";

        }
        else
            document.getElementById('response').innerText = "Unknown error";
        
        attempts++;

    } while(guess != answer && attempts < 3);

}   