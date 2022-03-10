function getLetterGrade()
{
    if(!document.getElementById)
        return;

    var x = document.getElementById("grade").value;
    let msg = "";
    let letter = "";
    if ((x >= 90) && (x <= 100)) 
    {
        letter = "A";
        msg += "You made an A on your test!";
        msg += " Congratulations!" ;
    } 
    else if((x >= 80 ) && (x < 90)) 
    {
        letter = "B";
        msg += "You made an B on your test!";
        msg += " Good job anyway!";
    }
    else if((x >= 70 ) && (x < 80)) 
    {
        letter = "C";
        msg += "You made an C on your test!" ;
        msg += " It is okay!";
    }
    else if((x >= 60 ) && (x < 70)) 
    {
        letter = "D";
        msg += "You made an D on your test!";
        msg += " That not good!";
    }
    else {
        letter = "F";
        msg += "You made an F on your test!" ;
        msg += " Sorry, but you failed!";
    }

    obj = document.getElementById("message");
    obj.innerText= msg;
    if (letter.match("D") || letter.match("F"))
    {
        obj.style.fontweight ="bold";
        obj.style.color ="red";
        obj.style.backgroundColor = "yellow";
    }
    else
    {
        obj.style.fontweight="unset";
        obj.style.color="unset";
        obj.backgroundColor="unset";
    }

    document.getElementById("grade").value = "";
} //end the function





/*= is not the same as ==*/
/*= is the assignment operator*/
/*== is the comparison operator */
/*
<
>
>=
<=
!= not equal
*/

//And operator &&
/*
    A   B   A&&B
    T   T    TT
    T   F    FF
    F   F       
*/