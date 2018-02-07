//======get random word========
//if "A" is picked, search word for "A"
// if word contains "A", fill in "A" in all spots it belongs
// else, subtract a life and add parts to hangman
// same for all letters

//===when button is clicked, disable button====
//button click = 1 try

//when word is filled in completely, notify user of win
//when run out of tries, you lose


//words to be guessed by user
//=========================================================
const secretWords = ["banana", "frog", "bazooka", "boomerang", "seashells", "cheese", "octopus", "spade", "mailbox", "yesterday", "leader", "pompous", "friendly", "jello", "personalize"]
let getRandomWord = secretWords[Math.floor(Math.random() * secretWords.length)]
console.log(getRandomWord)
// answer section with spaces for blank letters
// let printRandomWord = $('.answer-field').html(`${getRandomWord}`)

let lives = 6
$('.life-total').html(`You have ${lives} lives left.`)
let alphabet = "abcdefghijklmnopqrstuvwxyz"
//prints alphabet string into an array
let alphabetArray = []
console.log(alphabetArray)

//prints random word into array
let randomWordArray = []
console.log(randomWordArray)

//=========================================================
//function that subs underscores for letters
    let underscores = []
    for (i = 0; i < getRandomWord.length; i++){
        underscores[i] = "_"
}

$('.answer-field').html(underscores.join(" "))


//=========================================================
//split alphabet string and push to alphabet array
let splitAlphabet = function (letters) {
    for (let i = 0; i < letters.length; i++) {
        alphabetArray.push(letters[i])
        $('.letters-container').append(`<button id="${letters[i]}" class="btn btn-disabled red button-style">${letters[i]}</button>`)
    }
}
splitAlphabet(alphabet)

//=========================================================
//function to compare clicked button to random word
//.split function can be muthafuckin removed
function checker(anything){
    let checkRandomWord = getRandomWord.split('')
    console.log(checkRandomWord)
    for (let i = 0; i < checkRandomWord.length; i++){
        if(anything === checkRandomWord[i]){
            underscores[i]= anything
            $('.answer-field').html(underscores.join(" "))
        }
    }
}



//=========================================================
//life tracker function
//change shitBalls to something else
function lifeTracker(shitBalls) {
    $('.life-total').html(`You have ${lives} lives left.`)
    let wrongGuess = 0
    for (let i = 0; i < getRandomWord.length; i++){
        if (shitBalls !== getRandomWord[i]){
            wrongGuess++
            console.log(wrongGuess)
        }
    }
    if (wrongGuess === getRandomWord.length){
        lives--
        $('.life-total').html(`You have ${lives} lives left.`)
        console.log(lives)
    } else {
        $('.life-total').html(`You have ${lives} lives left.`)
    }

    if (lives < 1){
        $('.life-total').html("Game over")
        $('.btn').addClass('disabled')
    }
    // if (shitBalls !== getRandomWord[i]){
    //     $('.life-total').html(`You have ${lives -= 1} lives left`)
    // } 

}
//=========================================================
//this function gets the number of indexes for each letter
//may be completely unnecessary
// let matchLetters = function (letters, word) {
//     for (i = 0; i < letters.length; i++) {
//         let count = 0
//         let eachIndex = word.indexOf(letters[i])
//         while (eachIndex !== -1) {
//             count++
//             eachIndex = word.indexOf(letters[i], eachIndex + 1)
//         }
//         console.log(count)
//     }
// }


//=========================================================
//this get the id of the button on click
//thank you james, you sweet hunk
$(".btn").click(function(catfood){
    let value = catfood.target.id
    checker(value)
    lifeTracker(value)
    // matchLetters(value, getRandomWord)
    console.log(value)
    $(`#${value}`).attr('disabled', true)
})


//=========================================================
//split the random word into letters
//not sure if needed at all

let splitRandomWord = function (words) {
    for (let i = 0; i < words.length; i++) {
        randomWordArray.push(words[i])
    }
}
splitRandomWord(getRandomWord)







//=========================================================
// //reset button
// const resetGame = function () {
// }
// resetGame()

//where i left off: buttons need troubleshooting
//reset button does nothing when clicked