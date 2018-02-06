//======get random word========
//if "A" is picked, search word for "A"
// if word contains "A", fill in "A" in all spots it belongs
// else, subtract a life and add parts to hangman
// same for all letters

//when button is clicked, disable button
//button click = 1 try

//when word is filled in completely, notify user of win
//when run out of tries, you lose


//words to be guessed by user
const secretWords = ["banana", "frog", "bazooka", "boomerang", "seashells", "boobies", "mailbox", "yesterday"]
let getRandomWord = secretWords[Math.floor(Math.random() * secretWords.length)]
console.log(getRandomWord)

let lives = 6
let alphabet = "abcdefghijklmnopqrstuvwxyz"


//split alphabet string and push to alphabet array
let splitAlphabet = function (letters){
    let alphabetArray = []
    console.log(alphabetArray)
    for(let i = 0; i < letters.length; i++){
        alphabetArray.push(letters[i])
        let toButtonForm = letters[i]
        $('.letters-container').append(`<button class="btn ${letters[i]} red button-style">${toButtonForm}</button>`)
    }
}
splitAlphabet(alphabet)


//split the random word into letters
let splitRandomWord = function (words){
    randomWordArray = []
    console.log(randomWordArray)
    for(let i = 0; i < words.length; i++){
        console.log(words[i])
        randomWordArray.push(words[i])
    }
}
splitRandomWord(getRandomWord)


// answer section with spaces for blank letters

let answerSection = function () {
    let printRandomWord = $('.answer-field').html(`${getRandomWord}`)
}

answerSection()



//track life
//when a button is clicked, subtract one life
//when lives is less than one, alert "you lose" and buttons are disabled
let lifeTracker = function(){
$('.life-total').append(`${lives} lives remaining`)
$('.btn').on('click', function(){
    lives -= 1
    $('.life-total').html(`${lives} lives remaining`)
    if (lives < 1){
        alert("you lose")
        $('button').addClass('disabled')
    }
})
}
lifeTracker()

// disables button when clicked
const buttonDisable = function (){

}


//this is how to disable a button on click by class
// now fucking figure out how to do it for all 26 letters with a for loop
$('.a').on('click', function(){
    $('.a').addClass('disabled')
})