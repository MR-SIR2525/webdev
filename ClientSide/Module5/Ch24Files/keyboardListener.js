//intended use by "24code03.html"
function displayKey(e) 
{
    // which key was pressed?
    var keycode=e.which;

    character=String.fromCharCode(keycode);

    // find the object for the destination paragraph
    var keys_paragraph = document.getElementById('keys');

    var ktype = document.getElementById('ktype')
    message = e.type + "<br> ";

    if(e.type == "keyup")
    {
        message = "</br>" + message;
    }
    if (e.type == "keypress")
    {
        character=String.fromCharCode(keycode);
        // add the character to the paragraph
        keys_paragraph.innerHTML += character;
    }
    
    // ktype.innerHTML.padStart(ktype.innerText, 50, message);
    let temp = ktype.innerHTML;
    ktype.innerHTML = message + temp;
}

document.addEventListener("keypress", displayKey);
document.addEventListener("keydown", displayKey);
document.addEventListener("keyup", displayKey);