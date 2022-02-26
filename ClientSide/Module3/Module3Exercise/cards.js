// define the functions 
function printCard() 
{
   var name_line = "<strong>Name: </strong>" + this.name + "<br>\n";
   var email_line = "<strong>Email: </strong>" + this.email + "<br>\n";
   var address_line = "<strong>Address: </strong>" + this.address + "<br>\n";
   var phone_line = "<strong>Phone: </strong>" + this.phone + "<br>\n";
   var notes_line = "<strong>Notes: </strong>" + this.notes + "<hr>\n";
   // document.write(name_line, email_line, address_line, phone_line, notes);
   document.getElementById("cardsArea").innerHTML += name_line + email_line + address_line + phone_line + notes_line;
}

function Card(name, email, address, phone, notes)
{
   this.name = name;
   this.email = email;
   this.address = address;
   this.phone = phone;
   this.notes = notes;//added by me

   this.printCard = printCard;
}

// Create the objects
var sue = new Card("Sue Suthers", 
                   "sue@suthers.com", 
                   "123 Elm Street, Yourtown ST 99999", 
                   "555-555-9876",
                   "Requested extra discretion. We are to honor");
var fred = new Card("Fred Fanboy", 
                    "fred@fanboy.com", 
                    "233 Oak Lane, Sometown ST 99399", 
                    "555-555-4444",
                    "Agreeable person... might respond well to our salespitches");
var jimbo = new Card("Jimbo Jones", 
                     "jimbo@jones.com", 
                     "233 Walnut Circle, Anotherville ST 88999", 
                     "555-555-1344",
                     "Interested in overseas services but we did not finalize everything yet.");

// Now print them
sue.printCard();
fred.printCard();
jimbo.printCard();
