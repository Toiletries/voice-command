x=0;
y=0;
draw_circle="";
draw_rect="";
var speechrecognition=window.webkitSpeechRecognition
var recognition= new speechrecognition();
function start(){
    document.getElementById("status").innerHTML = "System is listening please speak"; 
  recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "The speech has been recognised as:"+content; 
if(content=="circle"){
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML = "started drawing circle ";
    draw_circle="set";
}
if(content=="rectangle"){
    x=Math.floor(Math.random()*900)
    y=Math.floor(Math.random()*600)
    document.getElementById("status").innerHTML = "started drawing rectangle ";
    draw_rect="set";
}
}
function setup(){
canvas=createCanvas(900,600);
}
function draw(){
if(draw_circle=="set"){
    document.getElementById("status").innerHTML = "circle is drawn";
    radius=Math.floor(Math.random()*100);
    circle(x,y,radius);
    draw_circle=""
}
if(draw_rect=="set"){
    document.getElementById("status").innerHTML = "rectangle is drawn ";
    rect(x,y,70,50);
    draw_rect=""
}
}