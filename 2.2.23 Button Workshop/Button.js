const button = document.querySelector("#button"); //We initialize the button we created so we can use it in js
let score = 0; //Initialize our score

/*
 * This function is called changeScore and doesn't take in any values, or arguments, in it's parameters (it would have
 * gone in between the parentheses)
*/
function changeScore(){
  score = score + 1; //Every time this function is called, we increase the score by 1.
  document.getElementById('score').innerHTML = score.toString(); //We set the text under the button to become the score
}

button.addEventListener("click", changeScore); //we change the score every time we click on the button