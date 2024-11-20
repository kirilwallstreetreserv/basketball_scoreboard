let homeCounter = document.getElementById("home")
let guestCounter = document.getElementById("guest")
 
 let homeScore=0
let  guestScore=0

function homeButton1(){
    homeScore+=1
    homeCounter.textContent=homeScore
}

function homeButton2(){
    homeScore+=2
    homeCounter.textContent=homeScore
}

function homeButton3(){
    homeScore+=3
    homeCounter.textContent=homeScore
}


function guestButton1(){
    guestScore+=1
    guestCounter.textContent=guestScore
}


function guestButton2(){
    guestScore+=2
    guestCounter.textContent=guestScore
}


function guestButton3(){
    guestScore+=3
    guestCounter.textContent=guestScore
}