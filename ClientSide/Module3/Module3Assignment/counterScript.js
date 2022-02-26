var count = 0;

function addOne()
{   
    count++;
    document.getElementById("counter").innerHTML = count;
}

function subtractOne()
{
    count--;
    document.getElementById("counter").innerHTML = count;
}