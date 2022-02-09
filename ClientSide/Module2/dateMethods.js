function getDate() 
{
    currentDateTime = new Date(); //variable - new date object

    dayNum = currentDateTime.getDay(); //gets day as int value
    day = dayToWord(dayNum);

    //inserts it to the HTML file
    document.getElementById('local-time').innerText = day + ", " + currentDateTime.toLocaleString();
}

function getRandomDate()
{   
    currentDT = new Date();
    rangeMin = 0;

    rangeMax = 9999;
    year = Math.floor(rangeMin + (rangeMax - rangeMin) * Math.random());
    currentDT.setYear(year);
    
    rangeMax = 11;
    month = Math.floor(rangeMin + (rangeMax - rangeMin) * Math.random());
    currentDT.setMonth(month);

    rangeMax = 7;
    day = Math.floor(rangeMin + (rangeMax - rangeMin) * Math.random());
    currentDT.setDate(day);

    rangeMax = 24;
    hour = Math.floor(rangeMin + (rangeMax - rangeMin) * Math.random());
    currentDT.setHours(hour);

    rangeMax = 60;
    minute = Math.floor(rangeMin + (rangeMax - rangeMin) * Math.random());
    currentDT.setMinutes(minute);

    seconds = Math.floor(rangeMin + (rangeMax - rangeMin) * Math.random());
    currentDT.setSeconds(seconds);

    dayWord = dayToWord(day);
    //inserting it to the HTML file
    document.getElementById('random-date').innerText = dayWord + ", " + currentDT.toLocaleString();
}



function dayToWord(dayNum) 
{
    //converting int value to word
    if (dayNum == 1)
        day = "Monday";
    else if (dayNum == 2)
        day = "Tuesday";
    else if (dayNum == 3)
        day = "Wednesday";
    else if (dayNum == 4)
        day = "Thursday";
    else if (dayNum == 5)
        day = "Friday";
    else if (dayNum == 6)
        day = "Saturday";
    else if (dayNum == 0)
        day = "Sunday";
    else
        day = "something went wrong"
    
    return day;
}
