/* 
    Functionality for form 1 -- setting player number
*/

let submitBtn = document.querySelector("#formOneSubmit");
let firstForm = document.querySelector("#formy");
let secondForm = document.querySelector("#formt");

submitBtn.addEventListener('click', function submitForm1() {
    
    firstForm.classList.remove("Hide");
    secondForm.classList.add("Hide");

    let Players = document.querySelector("#playerCount").value;
    let numPlayers = parseInt(Players);

    let nameOne = document.querySelector("#playerOne");
    let nameTwo = document.querySelector("#playerTwo");
    let nameThree = document.querySelector("#playerThree");
    let nameFour = document.querySelector("#playerFour");
    let nameFive = document.querySelector("#playerFive");
    let nameSix = document.querySelector("#playerSix");


    if(numPlayers === 2) {
        nameOne.classList.remove("Hide");
        nameTwo.classList.remove("Hide");
    } 
    if(numPlayers === 3) {
        nameOne.classList.remove("Hide");
        nameTwo.classList.remove("Hide");
        nameThree.classList.remove("Hide");
    }
    if(numPlayers === 4) {
        nameOne.classList.remove("Hide");
        nameTwo.classList.remove("Hide");
        nameThree.classList.remove("Hide");
        nameFour.classList.remove("Hide");
    } 
    if(numPlayers === 5) {
        nameOne.classList.remove("Hide");
        nameTwo.classList.remove("Hide");
        nameThree.classList.remove("Hide");
        nameFour.classList.remove("Hide");
        nameFive.classList.remove("Hide");
    } 
    if(numPlayers === 6) {
        nameOne.classList.remove("Hide");
        nameTwo.classList.remove("Hide");
        nameThree.classList.remove("Hide");
        nameFour.classList.remove("Hide");
        nameFive.classList.remove("Hide");
        nameSix.classList.remove("Hide");
    }
    
})


let gardensBTN = document.querySelector("#gardens");
let islandBTN = document.querySelector("#island");
let Gchecker = false;
let Ichecker = false;

gardensBTN.addEventListener('click', function(){
    if (Gchecker === false) {
        gardensBTN.classList.add("selected");
        gardensBTN.classList.remove("deselected");
        Gchecker = true;
    }
    else {
        gardensBTN.classList.remove("selected");
        gardensBTN.classList.add("deselected");
        Gchecker = false;
    }
})

islandBTN.addEventListener('click', function(){
    if (Ichecker === false) {
        islandBTN.classList.add("selected");
        islandBTN.classList.remove("deselected");
        Ichecker = true;
    }
    else {
        islandBTN.classList.remove("selected");
        islandBTN.classList.add("deselected");
        Ichecker = false;
    }
})

let scoreBoardsBTN = document.querySelector("#scoreboards");
let count = document.querySelector("#Counters");

let player1 = document.querySelector("#Player1");
let player2 = document.querySelector("#Player2");
let player3 = document.querySelector("#Player3");
let player4 = document.querySelector("#Player4");
let player5 = document.querySelector("#Player5");
let player6 = document.querySelector("#Player6");

let usernameOne = document.querySelector("#playerOne").value;
let usernameTwo = document.querySelector("#playerTwo").value;
let usernameThree = document.querySelector("#playerThree").value;
let usernameFour = document.querySelector("#playerFour").value;
let usernameFive = document.querySelector("#playerFive").value;
let usernameSix = document.querySelector("#playerSix").value;

player1Name = document.querySelector("#player1Name");
player2Name = document.querySelector("#player2Name");
player3Name = document.querySelector("#player3Name");
player4Name = document.querySelector("#player4Name");
player5Name = document.querySelector("#player5Name");
player6Name = document.querySelector("#player6Name");


scoreBoardsBTN.addEventListener('click', function(){
    firstForm.classList.add("Hide");
    count.classList.remove("Hide");
    let Players = document.querySelector("#playerCount").value
    let numPlayers = parseInt(Players);

    if(numPlayers === 2) {
        player1Name.textContent = document.querySelector("#playerOne").value;
        player2Name.textContent = document.querySelector("#playerTwo").value;
        player1.classList.remove("Hide");
        player2.classList.remove("Hide");

        
    } 
    if(numPlayers === 3) {
        player1Name.textContent = document.querySelector("#playerOne").value;
        player2Name.textContent = document.querySelector("#playerTwo").value;
        player3Name.textContent = document.querySelector("#playerThree").value;
        player1.classList.remove("Hide");
        player2.classList.remove("Hide");
        player3.classList.remove("Hide");
    }
    if(numPlayers === 4) {
        player1Name.textContent = document.querySelector("#playerOne").value;
        player2Name.textContent = document.querySelector("#playerTwo").value;
        player3Name.textContent = document.querySelector("#playerThree").value;
        player4Name.textContent = document.querySelector("#playerFour").value;
        player1.classList.remove("Hide");
        player2.classList.remove("Hide");
        player3.classList.remove("Hide");
        player4.classList.remove("Hide"); 
    }
    if(numPlayers === 5) {
        player1Name.textContent = document.querySelector("#playerOne").value;
        player2Name.textContent = document.querySelector("#playerTwo").value;
        player3Name.textContent = document.querySelector("#playerThree").value;
        player4Name.textContent = document.querySelector("#playerFour").value;
        player5Name.textContent = document.querySelector("#playerFive").value;
        player1.classList.remove("Hide");
        player2.classList.remove("Hide");
        player3.classList.remove("Hide"); 
        player4.classList.remove("Hide");
        player5.classList.remove("Hide"); 
    }
    if(numPlayers === 6) {
        player1Name.textContent = document.querySelector("#playerOne").value;
        player2Name.textContent = document.querySelector("#playerTwo").value;
        player3Name.textContent = document.querySelector("#playerThree").value;
        player4Name.textContent = document.querySelector("#playerFour").value;
        player5Name.textContent = document.querySelector("#playerFive").value;
        player6Name.textContent = document.querySelector("#playerSix").value;
        player1.classList.remove("Hide");
        player2.classList.remove("Hide");
        player3.classList.remove("Hide");
        player4.classList.remove("Hide");
        player5.classList.remove("Hide");
        player6.classList.remove("Hide");  
    }

})



/* 

if(numPlayers === 2) {
        count.classList.remove("Hide");
        counterOne.classList.remove("Hide");
    } 
    if(numPlayers === 3) {
        count.classList.remove("Hide");
        counterOne.classList.remove("Hide");
        counterTwo.classList.remove("Hide");
    }
    The break to player one functionality
*/

let cards = 10;
let score = 0;
let estate = 3;
let duchy = 0;
let province = 0;
let p1Score = document.querySelector("#p1Score");

let cMinus = document.querySelector("#cMinus");
let cPlus = document.querySelector("#cPlus");
let startcardsAmount = document.querySelector("#cardAmount");

cMinus.addEventListener('click', function(){
    cards = minusNumP1(cards, startcardsAmount);
})

cPlus.addEventListener('click', function(){
    cards = plusNumP1(cards, startcardsAmount);
})

let eMinus = document.querySelector("#eMinus");
let ePlus = document.querySelector("#ePlus");
let startEstatesAmount = document.querySelector("#estateAmount");

eMinus.addEventListener('click', function(){
    estate = minusNumP1(estate, startEstatesAmount);
    calcScoreP1()
})

ePlus.addEventListener('click', function(){
    estate = plusNumP1(estate, startEstatesAmount);
    calcScoreP1()
})

let dMinus = document.querySelector("#dMinus");
let dPlus = document.querySelector("#dPlus");
let startDuchyAmount = document.querySelector("#duchyAmount");

dMinus.addEventListener('click', function(){
    duchy = minusNumP1(duchy, startDuchyAmount);
    calcScoreP1()
})

dPlus.addEventListener('click', function(){
    duchy = plusNumP1(duchy, startDuchyAmount);
    calcScoreP1()
})

let pMinus = document.querySelector("#pMinus");
let pPlus = document.querySelector("#pPlus");
let startProvinceAmount = document.querySelector("#provinceAmount");

pMinus.addEventListener('click', function(){
    province = minusNumP1(province, startProvinceAmount);
    calcScoreP1()
})

pPlus.addEventListener('click', function(){
    province = plusNumP1(province, startProvinceAmount);
    calcScoreP1()
})

/*
    The break to functions
*/

function minusNumP1(vari, changing){
    vari = vari - 1;
    changing.textContent = vari;
    return vari;
}

function plusNumP1(vari, changing){
    vari = vari + 1
    changing.textContent = vari;
    return vari;
}

function calcScoreP1(){
    score = (estate * 1) + (duchy * 3) + (province * 6);
    p1Score.textContent = score;
}

/* 
    The break to player two functionality
*/
let cardsP2 = 10;
let scoreP2 = 0;
let estateP2 = 3;
let duchyP2 = 0;
let provinceP2 = 0;
let p2Score = document.querySelector("#p2Score");

let cardMinusP2 = document.querySelector("#cardMinusP2");
let cardPlusP2 = document.querySelector("#cardPlusP2");
let startcardsAmountP2 = document.querySelector("#cardAmountP2");

cMinus.addEventListener('click', function(){
    cardsP2 = minusNumP2(cardsP2, startcardsAmountP2);
})

cPlus.addEventListener('click', function(){P2
    cardsP2 = plusNumP2(cardsP2, startcardsAmountP2);
})

let estaMinusP2 = document.querySelector("#estaMinusP2");
let estaPlusP2 = document.querySelector("#estaPlusP2");
let startEstatesAmountP2 = document.querySelector("#estateAmountP2");

estaMinusP2.addEventListener('click', function(){
    estateP2 = minusNumP2(estateP2, startEstatesAmountP2);
    calcScoreP2()
})

estaPlusP2.addEventListener('click', function(){
    estateP2 = plusNumP2(estateP2, startEstatesAmountP2);
    calcScoreP2()
})

let duchMinusP2 = document.querySelector("#duchMinusP2");
let duchPlusP2 = document.querySelector("#duchPlusP2");
let startDuchyAmountP2 = document.querySelector("#duchyAmountP2");

duchMinusP2.addEventListener('click', function(){
    duchyP2 = minusNumP2(duchyP2, startDuchyAmountP2);
    calcScoreP2()
})

duchPlusP2.addEventListener('click', function(){
    duchyP2 = plusNumP2(duchyP2, startDuchyAmountP2);
    calcScoreP2()
})

let provMinusP2 = document.querySelector("#provMinusP2");
let provPlusP2 = document.querySelector("#provPlusP2");
let startProvinceAmountP2 = document.querySelector("#provinceAmountP2");

provMinusP2.addEventListener('click', function(){
    provinceP2 = minusNumP2(provinceP2, startProvinceAmountP2);
    calcScoreP2()
})

provPlusP2.addEventListener('click', function(){
    provinceP2 = plusNumP2(provinceP2, startProvinceAmountP2);
    calcScoreP2()
})

/*
    The break to functions
*/

function minusNumP2(vari, changing){
    vari = vari - 1;
    changing.textContent = vari;
    return vari;
}

function plusNumP2(vari, changing){
    vari = vari + 1
    changing.textContent = vari;
    return vari;
}

function calcScoreP2(){
    score = (estateP2 * 1) + (duchyP2 * 3) + (provinceP2 * 6);
    p2Score.textContent = score;
}