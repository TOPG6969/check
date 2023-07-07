var a=34;
document.getElementById("box34").style.backgroundColor="yellow";
document.getElementById("btnr").addEventListener("click",function(){
    if(Math.floor((a/10-Math.floor(a/10))*10)>=0&&Math.floor((a/10-Math.floor(a/10))*10)<7)
    {
    document.getElementById("box"+a).style.backgroundColor="transparent";
    a=a+1;
    console.log(Math.floor((a/10-Math.floor(a/10))*10));
    var b="box"+a;
   document.getElementById(b).style.backgroundColor="yellow";
    }
})
document.getElementById("btnl").addEventListener("click",function(){
    if(Math.floor((a/10-Math.floor(a/10))*10)>=0&&Math.floor((a/10-Math.floor(a/10))*10)<9)
    {
    document.getElementById("box"+a).style.backgroundColor="transparent";
    a=a-1;
    console.log(Math.floor((a/10-Math.floor(a/10))*10));
    var b="box"+a;
   document.getElementById(b).style.backgroundColor="yellow";
    }
})
document.getElementById("btnu").addEventListener("click",function(){
    if(a<69){
    document.getElementById("box"+a).style.backgroundColor="transparent";
    a=a+10;
    var b="box"+a;
   document.getElementById(b).style.backgroundColor="yellow";}
})
document.getElementById("btnd").addEventListener("click",function(){
    if(a>20){
    document.getElementById("box"+a).style.backgroundColor="transparent";
    a=a-10;
    var b="box"+a;
   document.getElementById(b).style.backgroundColor="yellow";}
})