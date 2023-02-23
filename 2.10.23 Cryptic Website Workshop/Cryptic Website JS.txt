//Creates buttons based upon their ids in the HTML file
const lockButton = document.querySelector("#lock"); 
const resetButton = document.querySelector("#resetButton");
const submitButton = document.querySelector("#submitButton");

//When these elements are clicked, execute their respective functions
lockButton.addEventListener("click", changeCount); 
submitButton.addEventListener("click", checkCount);
resetButton.addEventListener("click", resetCount);

//initialize our counter to 0
let counter = 0;

//This function increments counter by 1 and changes the number on the website.
function changeCount(){
  counter++;
  document.getElementById('countDisplay').innerHTML = counter.toString();
}

//when the submit button is clicked, it checks if counter is equal to 0, if so, makes it so that the
//video is visible. Notice the path from the element catVid to style sheets(CSS) to visibility (css element)
function checkCount(){
  if(counter == /*figure it out yourself :)*/ ){
    catVid.style.visibility = "visible";
  }
  
}

//sets counter to 0 and changes the number on the website to reflect that change
function resetCount(){
  counter = 0;
  document.getElementById('countDisplay').innerHTML = counter.toString();
}
