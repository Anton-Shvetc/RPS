
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');
let rock = document.getElementById('rock');

let paperBox = document.getElementById('paperBox');
let counter = 0;
let score = document.getElementById('score');



paper.addEventListener('click', paperСhoice);
scissors.addEventListener('click', scissorsСhoice);
rock.addEventListener('click', rockСhoice);

let one = document.createElement('div');

function CreateEl(){
one.id = 'botСhoice';
}


function paperСhoice(){
    
paper.classList.remove("bottonOff");
rock.classList.add("bottonOff");
scissors.classList.add("bottonOff");

CreateEl();
paperBox.appendChild(one);
 StartBot();
 paperWin();
 

  


 }


 function scissorsСhoice(){
scissors.classList.remove("bottonOff");
rock.classList.add("bottonOff");
paper.classList.add("bottonOff");
CreateEl();
scissorsBox.appendChild(one);
 StartBot();
scissorWin();

 }
 function rockСhoice(){
rock.classList.remove("bottonOff");
paper.classList.add("bottonOff");
scissors.classList.add("bottonOff");
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
Clear();
score.innerHTML = counter;
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
Clear();
score.innerHTML = counter;

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
    
Clear();
score.innerHTML = counter;
 }, 2000)
 
}


function Clear() {
rock.classList.remove("bottonOff");
scissors.classList.remove("bottonOff");
paper.classList.remove("bottonOff");

}