// Links buttons to JavaScript.
document.getElementById('button').addEventListener('click', randomizer)
document.getElementById('again').addEventListener('click', randomizer)

// Sets default values.
let randomNumber = 0
let userGuess = 0

// Converts user's number guess into an integer.
function randomizer () {
  userGuess = document.getElementById('input').value
  userGuess = parseInt(userGuess)
  // Generates random number between 1 and 6.
  randomNumber = Math.random() * 6 + 1
  randomNumber = parseInt(randomNumber)
  // Compares user's number guess with random generated number.
  if (userGuess === randomNumber) {
    document.getElementById('answer').innerHTML = "Are you a mastermind?"
  }
}
