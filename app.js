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
        $('.letters-container').append(`<button class="btn btn-disabled ${letters[i]} red button-style">${letters[i]}</button>`)
    }
}
splitAlphabet(alphabet)

let compareValues = function(val){
    let splitWord = getRandomWord.split('')
    for (let i = 0; i < splitWord.length; i++){
        if(val === splitWord[i]){
            console.log("match")
        }
    }
}



//split the random word into letters
//not sure if needed at all

// let splitRandomWord = function (words) {
//     for (let i = 0; i < words.length; i++) {
//         console.log(words[i])
//         randomWordArray.push(words[i])
//     }
// }
// splitRandomWord(getRandomWord)








//track life
//when a button is clicked, subtract one life
//when lives is less than one, alert "you lose" and buttons are disabled
let lifeTracker = function () {
    $('.life-total').append(`${lives} lives remaining`)
    $('.btn-disabled').on('click', function () {
        lives -= 1
        $('.life-total').html(`${lives} lives remaining`)
        if (lives < 1) {
            alert("you lose")
            $('.btn-disabled').addClass('disabled')
        }
    })
}
lifeTracker()


//this function gets the number of indexes for each letter
let matchLetters = function (letters, word) {
    for (i = 0; i < letters.length; i++) {
        let singleLetter = letters[i]
        console.log(letters[i])
        let count = 0
        let eachIndex = word.indexOf(letters[i])
        while (eachIndex !== -1) {
            count++
            eachIndex = word.indexOf(letters[i], eachIndex + 1)
        }
        console.log(count)
    }
}
matchLetters(alphabet, getRandomWord)


//this is how to disable a button on click by class
// now fucking figure out how to do it for all 26 letters with a for loop

$('.a').on('click', function () {
    $('.a').addClass('disabled')
    let check = getRandomWord.indexOf('a')
    console.log(check)
    if (check !== -1){
        console.log("winner")
    } else {
        console.log("lose life")
    }
    })
$('.b').on('click', function () {
    $('.b').addClass('disabled')
})
$('.c').on('click', function () {
    $('.c').addClass('disabled')
})
$('.d').on('click', function () {
    $('.d').addClass('disabled')
})
$('.e').on('click', function () {
    $('.e').addClass('disabled')
    let shit = getRandomWord.indexOf('e')
    console.log(shit)
})
$('.f').on('click', function () {
    $('.f').addClass('disabled')
})
$('.g').on('click', function () {
    $('.g').addClass('disabled')
})
$('.h').on('click', function () {
    $('.h').addClass('disabled')
})
$('.i').on('click', function () {
    $('.i').addClass('disabled')
})
$('.j').on('click', function () {
    $('.j').addClass('disabled')
})
$('.k').on('click', function () {
    $('.k').addClass('disabled')
})
$('.l').on('click', function () {
    $('.l').addClass('disabled')
})
$('.m').on('click', function () {
    $('.m').addClass('disabled')
})
$('.n').on('click', function () {
    $('.n').addClass('disabled')
})
$('.o').on('click', function () {
    $('.o').addClass('disabled')
})
$('.p').on('click', function () {
    $('.p').addClass('disabled')
})
$('.q').on('click', function () {
    $('.q').addClass('disabled')
})
$('.r').on('click', function () {
    $('.r').addClass('disabled')
})
$('.s').on('click', function () {
    $('.s').addClass('disabled')
})
$('.t').on('click', function () {
    $('.t').addClass('disabled')
})
$('.u').on('click', function () {
    $('.u').addClass('disabled')
})
$('.v').on('click', function () {
    $('.v').addClass('disabled')
})
$('.w').on('click', function () {
    $('.w').addClass('disabled')
})
$('.x').on('click', function () {
    $('.x').addClass('disabled')
})
$('.y').on('click', function () {
    $('.y').addClass('disabled')
})
$('.z').on('click', function () {
    $('.z').addClass('disabled')
})


//reset button
const resetGame = function () {
}
resetGame()

//where i left off: buttons need troubleshooting
//reset button does nothing when clicked