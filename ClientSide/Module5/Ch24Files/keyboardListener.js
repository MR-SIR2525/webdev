//intended use by "24code03.html"
function displayKey(e) 
{
    // which key was pressed?
    var keycode = e.which;

    character = String.fromCharCode(keycode);

    // find the object for the destination paragraph
    var keys_paragraph = document.getElementById('keys');

    var ktype = document.getElementById("ktype");
    message = e.type + "<br>";
    if (e.type == "keyup")
        message += "<br><br>";

    // add the character to the paragraph
    keys_paragraph.innerHTML += character;
    ktype.innerHTML += e.type + " ";
}

//keyboard event listener
document.addEventListener("keypress", displayKey);
document.addEventListener("keydown", displayKey);
document.addEventListener("keyup", displayKey);
