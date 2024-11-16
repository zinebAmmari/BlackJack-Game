

let paragraph = document.getElementById('paragraph')
let pcards = document.getElementById('pcards')
let psum = document.getElementById('psum')
let cards =[]
let sum =0
let isalive=false 
let hasblackjack = false
let message= ""



function randomN(){
    let numbers = Math.floor(Math.random()*13)+1;
    if(numbers>10){
        return 10
    }
    else if(numbers===1){
        return 11
    }
    else {
        return numbers
    }
}




function startGame(){
    isalive = true 
    hasblackjack = false;
    cards = [];
    sum = 0;
    let firstNumber = randomN()
    let SecondNumber = randomN()
    cards.push(firstNumber,SecondNumber)
    sum = firstNumber + SecondNumber
    renderGame()
} 




function renderGame(){
    pcards.textContent = "Cards: " + cards.join(" ");
    
    psum.textContent+= sum +" "
       if(sum<=20){ 
        message = 'u still alive , pick another card'
       }
       else if(sum===21){
           message = 'yeeey , u win!'
           hasblackjack=true
       }
       else {
           message='u lost !'
           isalive=false
       
       }
       paragraph.textContent=message
}


function newCard(){
    if(isalive && !hasblackjack){
        let card= randomN()
        sum += card
        cards.push(card)
        renderGame()
    }
    
}
