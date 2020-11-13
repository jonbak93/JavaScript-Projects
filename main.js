/*These are all the items I was assigned to create. I also added in a few more things. Since we were talking about 
functions, I used them in here to display my knowledge of them. 
*/






var apple = "Check yourself before you wreck yourself."; //assigning a value to a variable 

document.write(apple); //calling the variable, so it shows on my HTML file

function assignedVariable() //naming a function
{
    var aVariable = "This is my string"; //naming a variable 
    return window.alert(aVariable); //returning the variable w/ an alert window
}

assignedVariable(); //calling a function


function doubleQuote() //naming a function
{
    var double = "Ash Catchem' said \"I choose you, Charmander!\" and Team Rocket's\ instant reply was, \"That Charmander stands no chance against our meowth!\" ";
    //separating the quotes in a string variable
    return document.write(double); //returning the string variable so it shows up on my HTML page
}

doubleQuote(); //calling a function


var concatenate = "1, 2, 3, 4." + " I declare a thumb war!"; //concatenating a string 

document.write(concatenate); //returning the string variable so it displays on the HTML page

var p = "concatenated" + " string"; //concatenating a string

document.write(p); //returning a string variable 


var var1 = "First String"; //assigning string values to 2 different variables
var var2 = "Second String";
document.write(var1 + var2); //concatenating the variables



var p1 = "Pikachu",
    p2 = "Charmander",
    p3 = "Squirtle",
    p4 = "Bulbasaur"; //naming 4 different variables with Pokémon names

document.write(p3); //returning a string variable


var p1 = p1.fontcolor("Yellow");
var p2 = p2.fontcolor("Orange");
var p3 = p3.fontcolor("Blue");
var p4 = p4.fontcolor("Green"); //giving the text in my Pokémon variables color

document.write(p1, p2, p3, p4); //returning string variables


var expression = 7 * 77; //writing an expression