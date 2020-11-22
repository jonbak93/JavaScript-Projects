function clicker() { //creating a function that calls a button to concatenate two sentences
    var sentence = "I am committed to passing this course!"; //creating first part of sentence
    sentence += " See you on the other side."; //creating second part of sentence and using += to concatenating
    document.getElementById("Concatenate").innerHTML = sentence; //using html element id to concatenate two sentences
}

clicker(); //calling the function
