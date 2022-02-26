// initialize the counter and the array
var numbernames = 0;
var names = new Array();
function toDoList() 
{
   // Get the name from the text field
   thename = document.theform.newname.value;

   if (!thename == ("")) //prevents empty strings going into the array if you submit empty strings
   {
      // Add the name to the array
      names[numbernames] = thename.toUpperCase();
      // Increment the counter
      numbernames++;
      // Sort the array
      // names.sort();

      //loop to make numbered list
      let thingToPrint = "";
      for (let i = 0; i < names.length; i++)
      {
         thingToPrint += (i+1) + ". " + names[i] + "\n";
      }
      
      document.theform.sorted.value = thingToPrint;

      // document.theform.sorted.value = names.join("\n"); //original
   }
   
   document.getElementById("inputField1").value = ""; //simple way to clear input instead of the event listener...
}

function clearList()
{
    while(names.length > 0) 
    {
        names.pop();
    }
    document.theform.sorted.value = "List was cleared";

}


//Pass the element id of the field you want cleared when button is clicked/submitted via enter
// function clearInputBox(fieldID) 
// {
//    const btn = document.getElementById('button1');

//    btn.addEventListener('click', function handleClick(event)    {
//       // 👇️ if you are submitting a form (prevents page reload)
//       event.preventDefault();

//       // const firstNameInput = document.getElementById('first_name');

//       // // Send value to server
//       // console.log(firstNameInput.value);

//       // 👇️ clear input field
//       fieldID.value = '';
//    } );
// }