const $ = require('jquery')

//words to be guessed by user
//=========================================================
const secretWords = ["banana", "frog", "bazooka", "boomerang", "seashells", "cheese", "octopus", "spade", "mailbox", "yesterday", "leader", "pompous", "friendly", "jello", "personalize"]
let getRandomWord = secretWords[Math.floor(Math.random() * secretWords.length)]
console.log(getRandomWord)
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
//function to compare clicked button to random word array
function checker(anything) {
    let checkRandomWord = getRandomWord
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
//measures right and wrong guesses
//displays hangman parts, lives, and result messages
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
        <div class="lives green-text win">A+ PASS</div>
        <button class="btn reset green button-style">Play again?</button>`)
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
        <div class="red-text fail">F- FAIL</div>
        <button class="btn reset red button-style">Play again?</button>`)
        $('.reset').on('click', function () {
            location.reload()
        })
    }
    if (lives < 6 && lives > 4) {
        $('.head').html('o')
    }
    if (lives < 5 && lives > 3) {
        $('.torso').html('|')
    }
    if (lives < 4 && lives > 2) {
        $('.left-arm').html('\\')
    }
    if (lives < 3 && lives > 1) {
        $('.right-arm').html('/')
    }
    if (lives < 2 && lives > 0) {
        $('.left-leg').html('/')
    }
    if (lives < 1) {
        $('.right-leg').html('\\')
    }
}

//=========================================================
//this gets the id of the button on click
//thank you james, you sweet hunk
$(".alpha").click(function (event) {
    let value = event.target.id
    checker(value)
    lifeTracker(value)
    $(`#${value}`).attr('disabled', true)
})

//=========================================================
//reset button click function
$('.reset').on('click', function () {
    location.reload()
})

// $('.test').on('click', function () {
//     $('.test').css('background', 'green')
//     function () { $('.test').mouseout('background', 'blue') }
    
// })
