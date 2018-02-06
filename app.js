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
const secretWords = ["banana", "frog", "bazooka", "boomerang", "seashells", "cheese", "abcdefghijklmnopqrstuvwxyz", "mailbox", "yesterday", "leader", "pompous", "friendly", "jello", "personalize"]
let getRandomWord = secretWords[Math.floor(Math.random() * secretWords.length)]
console.log(getRandomWord)
// answer section with spaces for blank letters
let printRandomWord = $('.answer-field').html(`${getRandomWord}`)

let lives = 6
let alphabet = "abcdefghijklmnopqrstuvwxyz"
//prints alphabet string into an array
let alphabetArray = []
console.log(alphabetArray)

//prints random word into array
randomWordArray = []
console.log(randomWordArray)

//split alphabet string and push to alphabet array
let splitAlphabet = function (letters) {
    for (let i = 0; i < letters.length; i++) {
        alphabetArray.push(letters[i])
        $('.letters-container').append(`<button id="${letters[i]}" class="btn btn-disabled red button-style">${letters[i]}</button>`)
    }
}
splitAlphabet(alphabet)

function checker(anything){
    let checkRandomWord = getRandomWord.split('')
    for (let i = 0; i < checkRandomWord.length; i++){
        if (anything === checkRandomWord[i]){
            $('.answer-field').append(`${checkRandomWord[i]}`)
        } else {
            console.log("letter is NOT in this word x amount of times")
        }
    }
}


//this get the id of the button on click
//thank you james, you sweet hunk
$(".btn").click(function(catfood){
    let value = catfood.target.id
    checker(value)
    matchLetters(value, getRandomWord)
    console.log(value)
    $(`#${value}`).attr('disabled', true)
})

//this function gets the number of indexes for each letter

let matchLetters = function (letters, word) {
    for (i = 0; i < letters.length; i++) {
        let count = 0
        let eachIndex = word.indexOf(letters[i])
        while (eachIndex !== -1) {
            count++
            eachIndex = word.indexOf(letters[i], eachIndex + 1)
        }
        console.log(count)
    }
}



//split the random word into letters
//not sure if needed at all

let splitRandomWord = function (words) {
    for (let i = 0; i < words.length; i++) {
        randomWordArray.push(words[i])
    }
}
splitRandomWord(getRandomWord)








//track life
//when a button is clicked, subtract one life
//when lives is less than one, alert "you lose" and buttons are disabled
// let lifeTracker = function () {
//     $('.life-total').append(`${lives} lives remaining`)
//     $('.btn-disabled').on('click', function () {
//         lives -= 1
//         $('.life-total').html(`${lives} lives remaining`)
//         if (lives < 1) {
//             alert("you lose")
//             $('.btn-disabled').addClass('disabled')
//         }
//     })
// }
// lifeTracker()




// //reset button
// const resetGame = function () {
// }
// resetGame()

//where i left off: buttons need troubleshooting
//reset button does nothing when clicked