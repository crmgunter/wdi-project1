//=========================================================
//parallax
$(document).ready(function(){
    $('.parallax').parallax();
  });
      

//words to be guessed by user
//=========================================================
const secretWords = ["banana", "frog", "bazooka", "boomerang", "seashells", "cheese", "octopus", "spade", "mailbox", "yesterday", "leader", "pompous", "friendly", "jello", "personalize"]
let getRandomWord = secretWords[Math.floor(Math.random() * secretWords.length)]
console.log(getRandomWord)
// answer section with spaces for blank letters
// let printRandomWord = $('.answer-field').html(`${getRandomWord}`)

let lives = 6
$('.life-total').html(`<p class="lives">You have ${lives} lives left.</p>`)
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let alphabetArray = []
let randomWordArray = []

//=========================================================
//subs underscores for letters
let underscores = []
for (i = 0; i < getRandomWord.length; i++) {
    underscores[i] = "_"
}

$('.answer-field').html(`<p class="lives">${underscores.join(" ")}</p>`)
$('.reset-btn').append(`<button class="btn reset black button-style">New Game</button>`)


//=========================================================
//split alphabet string and push to alphabet array
let splitAlphabet = function (letters) {
    for (let i = 0; i < letters.length; i++) {
        alphabetArray.push(letters[i])
        $('.letters-container').append(`<button id="${letters[i]}" class="btn alpha btn-disabled black button-style">${letters[i]}</button>`)
    }
}
splitAlphabet(alphabet)

//=========================================================
//function to compare clicked button to random word
//.split function can be muthafuckin removed
function checker(anything) {
    let rightGuess = 0
    let checkRandomWord = getRandomWord.split('')
    console.log(checkRandomWord)
    for (let i = 0; i < checkRandomWord.length; i++) {
        if (anything === checkRandomWord[i]) {
            underscores[i] = anything
            $('.answer-field').html(`<p class="lives">${underscores.join(" ")}</p>`)
            randomWordArray.push(underscores[i])
        }
    }
}



//=========================================================
//life tracker function
//change shitBalls to something else
function lifeTracker(shitBalls) {
    $('.life-total').html(`<p class="lives">You have ${lives} lives left.</p>`)
    let wrongGuess = 0
    let rightGuess = 0
    for (let i = 0; i < getRandomWord.length; i++) {
        if (shitBalls !== getRandomWord[i]) {
            wrongGuess++
        }
    }
    if (wrongGuess === getRandomWord.length) {
        lives--
        $('.life-total').html(`<p class="lives">You have ${lives} lives left.</p>`)
    }

    if (randomWordArray.length === getRandomWord.length) {
        $('.hangman-box').html(`
        <div class="lives green-text win">YOU FUCKING WIN!</div>
        <button class="btn reset black button-style">Play again?</button>`)
        $('.reset').on('click', function () {
            location.reload()
        })

        
        $('.alpha').addClass('disabled')
    }

    if (lives < 1) {
        $('.life-total').html(`<p class="lives">Game over</p>`)
        $('.alpha').addClass('disabled')
        $('.answer-field').html(getRandomWord)
        $('.hangman-box').html(`
        <div class="red-text fail">FAIL</div>
        <button class="btn reset black button-style">Play again?</button>`)
        $('.reset').on('click', function () {
            location.reload()
        })
    }
    if (lives < 6 && lives > 4){
        $('.head').html('o')
    }
    if (lives < 5 && lives > 3){
        $('.torso').html('|')
    }
    if (lives < 4 && lives > 2){
        $('.left-arm').html('\\')
    }
    if (lives < 3 && lives > 1){
        $('.right-arm').html('/')
    }
    if (lives < 2 && lives > 0){
        $('.left-leg').html('/')
    }
    if (lives < 1){
        $('.right-leg').html('\\')
    }
}


//=========================================================
//this get the id of the button on click
//thank you james, you sweet hunk
$(".alpha").click(function (catfood) {
    let value = catfood.target.id
    checker(value)
    lifeTracker(value)
    // matchLetters(value, getRandomWord)
    console.log(value)
    $(`#${value}`).attr('disabled', true)
})
$('.reset').on('click', function () {
    location.reload()
})



//=========================================================
//hangman apparatus

function stickman(){
    let count = 0
    for (let i = 0; i < lives.length; i++){
        console.log(lives[i])

    }
}

stickman()