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
 Win();
 

 
 
//  paperBox.removeChild(one);



 }
 function scissorsСhoice(){
Scissors.classList.remove("bottonOff");
Rock.classList.add("bottonOff");
Paper.classList.add("bottonOff");
CreateEl();
scissorsBox.appendChild(one);
 StartBot();
//  Win();

 }
 function rockСhoice(){
Rock.classList.remove("bottonOff");
Paper.classList.add("bottonOff");
Scissors.classList.add("bottonOff");
CreateEl();
rockBox.appendChild(one);
 StartBot();
//  Win();

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
    

// imagez = ('<img src="img/'+sha+'.png" border="0" />');

document.getElementById("botСhoice").innerHTML ='<img src="img/'+sha()+'.png" border="0"  id="test"/>';


}, 100)
    
 

}

function Win(){
     setTimeout(function(){
console.log(document.getElementById("botСhoice"));
let s = document.getElementById("test");
// console.log("The name is "+ s.src.substr(s.src.lastIndexO f("/") +1, s.src.length));


// alert("The Soursce is "+ s.src);
let RockStop = s.src.substr(s.src.lastIndexOf("/")+1,s.src.length);


 if (RockStop == '0.png') {
    alert("You Win!");
} else if (RockStop == '2.png') {
      alert("You Lose!");
} else {
    alert("Draw!");
}
paperBox.removeChild(one);
 }, 2000)
}