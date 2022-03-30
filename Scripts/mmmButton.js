//this is a funciton that reveals/hides my email using a button
function revealMMM() 
{
    if (document.getElementById('mmm2')) 
    {
        document.getElementById('mmm').innerHTML = "";
        document.getElementById("mmmButton").innerText = "reveal email";
    }
    else 
    {
        //I'm showing the email this way in hopes that web crawlers won't be able to decipher it
        document.getElementById("mmm").innerHTML =
            "<a id=\"mmm2\" href" + "=\"" + "ma" + "il" + "to" + ":" + "christian." + "blythe." + "30" + "@" + "student." + "prcc." + "e" + "du\""
            + ">" + "christian." + "blythe." + "30" + "@" + "student." + "prcc." + "edu" + "</a>";
        document.getElementById("mmmButton").innerText = "hide email";
    }
}

//use it like this:

{/* <p id="contactMe" class="favSiteLink">
    If you wish to contact me:&nbsp;<button id="mmmButton" title="click to show email" type="button"
        onclick="revealMMM()" style="width: 90px; padding: 2px 5px 2px 5px;">reveal email</button>&nbsp;
    <span id="mmm"></span>

    <script src="/webdev/Scripts/mmmButton.js"></script>
    <br>
</p> */}