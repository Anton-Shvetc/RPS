// Paper.addEventListener('click' , function(){
// let a=Math.round(Math.random()*4)
// image = new Array();
// image[0]="/img/Paper.png"
// image[1]="/img/Scissors.png"
// image[2]="/img/Rock.png"

// document.write ("<img src="+image[a]+">");
    
// });
let Paper = document.getElementById('paper');
let Scissors = document.getElementById('scissors');
let Rock = document.getElementById('rock');

let paperBox = document.getElementById('paperBox');
let counter = 0;

Paper.addEventListener('click', paperСhoice);
Scissors.addEventListener('click', scissorsСhoice);
Rock.addEventListener('click', rockСhoice);

let one = document.createElement('div');

function CreateEl(){
one.id = 'botСhoice';
}


function paperСhoice(){
    
Paper.classList.remove("bottonOff");
Rock.classList.add("bottonOff");
Scissors.classList.add("bottonOff");

CreateEl();
paperBox.appendChild(one);
 StartBot();
 paperWin();
 

  
//  paperBox.removeChild(one);

 }


 function scissorsСhoice(){
Scissors.classList.remove("bottonOff");
Rock.classList.add("bottonOff");
Paper.classList.add("bottonOff");
CreateEl();
scissorsBox.appendChild(one);
 StartBot();
scissorWin();

 }
 function rockСhoice(){
Rock.classList.remove("bottonOff");
Paper.classList.add("bottonOff");
Scissors.classList.add("bottonOff");
CreateEl();
rockBox.appendChild(one);
 StartBot();
rockWin();

 }


sha = function(){
return Math.floor(Math.random() * 3);   
} 


function StartBot() {
let timesRun = 0;
    let interval = setInterval( function() {

   timesRun += 1;
    if(timesRun === 15){
        clearInterval(interval);
    }
    



document.getElementById("botСhoice").innerHTML ='<img src="img/'+sha()+'.png" border="0"  id="botImg"/>';


}, 100)
    
 

}

function paperWin(){
     setTimeout(function(){
console.log(document.getElementById("botСhoice"));
let s = document.getElementById("botImg");
let botChoiceStop = s.src.substr(s.src.lastIndexOf("/")+1,s.src.length);


 if (botChoiceStop == '0.png') {
    alert("You Win!");
    counter ++;
    console.log(counter);
} else if (botChoiceStop == '2.png') {
      alert("You Lose!");
    counter --;
    console.log(counter);
} else {
    alert("Draw!");
   
}
console.log(counter);
paperBox.removeChild(one);
 }, 2000)
}

function scissorWin(){
     setTimeout(function(){
console.log(document.getElementById("botСhoice"));
let s = document.getElementById("botImg");
let botChoiceStop = s.src.substr(s.src.lastIndexOf("/")+1,s.src.length);


 if (botChoiceStop == '1.png') {
    alert("You Win!");
    counter ++;
    console.log(counter);
} else if (botChoiceStop == '0.png') {
      alert("You Lose!");
    counter --;
    console.log(counter);
} else {
    alert("Draw!");
   
}
console.log(counter);
scissorsBox.removeChild(one);
 }, 2000)
}

function rockWin(){
     setTimeout(function(){
console.log(document.getElementById("botСhoice"));
let s = document.getElementById("botImg");
let botChoiceStop = s.src.substr(s.src.lastIndexOf("/")+1,s.src.length);


 if (botChoiceStop == '2.png') {
    alert("You Win!");
    counter ++;
    console.log(counter);
} else if (botChoiceStop == '1.png') {
      alert("You Lose!");
    counter --;
    console.log(counter);
} else {
    alert("Draw!");
   
}
console.log(counter);
rockBox.removeChild(one);
 }, 2000)
}


