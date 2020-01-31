
const firstName="Tamirat"

let lastName="Lemma"

let fullName = firstName + " " + lastName;

document.write(firstName + " " + 
lastName + "<br>");



let title = document.getElementById('title');

title.innerHTML = ("This is JavaScript")

let address = "via caluso, 27" + "<br>" + "10148, TO" + "<br>"+  "Turin Italy"

document.write(address);


//creating html elements using javascript, fucking long syntax
let title2 = document.createElement("h2");

let text = document.createTextNode("This is created by document with text node")

let text2 = document.createTextNode("This text2 is created by document with text node")

title2.appendChild(text); 

document.body.appendChild(title2);

document.body.appendChild(text2); //shortcut to output text

//end of section 


document.write(`<br> <br> I am ${fullName}`) //embed a varaible into a string 