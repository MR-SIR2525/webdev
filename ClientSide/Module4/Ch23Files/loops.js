// create the array
names = new Array();
var i = 0;
var counter = 0; //added by me (Andrew)

// loop and prompt for names
do 
{
  counter++;
  next = window.prompt("You'll be entering 10 names.\nEnter Name #" + (i+1), ""); 
  if (next > " ") 
    names[i] = next;
  
  i = i + 1;

} while (next > " " && counter < 10);

document.write("<h2>" + (names.length) + " names entered.</h2>");

// display all of the names
document.write("<ol>");
names.sort();

for (i in names) { 
  document.write("<li>" + names[i] + "</li>");
}
// close the list
document.write("</ol>");
