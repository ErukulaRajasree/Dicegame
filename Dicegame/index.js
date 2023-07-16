var r=Math.random();
var l=Math.floor(r*6)+1;
var a=Math.random();
var ll=Math.floor(a*6)+1;
if(l>ll)
    document.querySelector("h1").innerHTML="🚩Player1 wins";
else if(l<ll)
    document.querySelector("h1").innerHTML="Player2 wins🚩"
else    
    document.querySelector("h1").innerHTML="Draw"

if(l==1)
    document.querySelector(".img1").setAttribute("src","./images/dice1.png");
else if(l==2)
    document.querySelector(".img1").setAttribute("src","./images/dice2.png");
else if(l==3)
    document.querySelector(".img1").setAttribute("src","./images/dice3.png");
else if(l==4)
    document.querySelector(".img1").setAttribute("src","./images/dice4.png");
else if(l==5)
    document.querySelector(".img1").setAttribute("src","./images/dice5.png");
else
    document.querySelector(".img1").setAttribute("src","./images/dice6.png");

if(ll==1)
    document.querySelector(".img2").setAttribute("src","./images/dice1.png");
else if(ll==2)
    document.querySelector(".img2").setAttribute("src","./images/dice2.png");
else if(ll==3)
    document.querySelector(".img2").setAttribute("src","./images/dice3.png");
else if(ll==4)
    document.querySelector(".img2").setAttribute("src","./images/dice4.png");
else if(ll==5)
    document.querySelector(".img2").setAttribute("src","./images/dice5.png");
else
    document.querySelector(".img2").setAttribute("src","./images/dice6.png");