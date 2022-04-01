document.getElementById("alert").addEventListener("click", function () 
{
    alertVal = window.alert("This is a test alert.");
    document.getElementById("alertlbl").innerText = "Alert complete: ";
    document.getElementById("al").innerText = "This is an Alert and it will always return undefined."; // added
} );

document.getElementById("confirm").addEventListener("click", function () 
{
    confirmVal = window.confirm("Would you like to confirm?");
    document.getElementById("confirmationlbl").innerText = "Confirmation prompt returned: ";
    document.getElementById("cn").innerText = confirmVal //added by me
} );

document.getElementById("prompt").addEventListener("click", function () 
{
    promptVal = window.prompt("Enter Text:", "This is the default.");
    document.getElementById("promptlbl").innerText = "Prompt returned: ";
    document.getElementById("pr").innerText = promptVal //added by me
} );