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

Paper.addEventListener('click', StartBot);
Scissors.addEventListener('click', StartBot);
Rock.addEventListener('click', StartBot);


function StartBot(){
let timesRun = 0;

Rock.classList.add("bottonOff");
Scissors.classList.add("bottonOff");

let interval = setInterval( function() {
sha = function(){
return Math.floor(Math.random() * 3);   
} 
   timesRun += 1;
    if(timesRun === 15){
        clearInterval(interval);
    }
    console.log(timesRun);
console.log(sha);
imagez = ('<img src="img/'+sha+'.png" border="0" />');
document.getElementById("botChoose").innerHTML = '<img src="img/'+sha()+'.png" border="0" />';

}, 100)
 }


