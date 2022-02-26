var x=300,y=205; 
function pos(dx,dy) 
{
    if (!document.getElementById) return;
    x += 1*dx; //originally 30
    y += 1*dy; //originally 30
    obj = document.getElementById("square");
    obj.style.top=y + "px";
    obj.style.left=x + "px";
}
function hideSquare() 
{
    if (!document.getElementById) return;
    obj = document.getElementById("square");
    obj.style.display="none";
}
function showSquare() 
{
    if (!document.getElementById) return;
    obj = document.getElementById("square");
    obj.style.display="block";
}