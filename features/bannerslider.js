const b1 = document.getElementById("b1");
const b2 = document.getElementById("b2");
const b3 = document.getElementById("b3");
const b0 = document.getElementById("b0");

const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");
const dot1 = document.getElementById("dot1");

function showD1(){

    if(b0.style.display == "none"){
        b0.style.display = "none";
        b1.style.display = "block";
        b2.style.display = "none";
        b3.style.display = "none";
    }
    dot1.style.backgroundColor = "white";
    dot2.style.backgroundColor = "#116694";
    dot3.style.backgroundColor = "#116694";
}
function showD2(){

    b0.style.display = "none";
    b2.style.display = "block";
    b1.style.display = "none";
    b3.style.display = "none";
    dot2.style.backgroundColor = "white";
    dot1.style.backgroundColor = "#116694";
    dot3.style.backgroundColor = "#116694";
}
function showD3(){

    b0.style.display = "none";
    b3.style.display = "block";
    b2.style.display = "none";
    b1.style.display = "none";
    dot3.style.backgroundColor = "white";
    dot2.style.backgroundColor = "#116694";
    dot1.style.backgroundColor = "#116694";
}

const t1 = document.getElementById("teamimg1");
const t2 = document.getElementById("teamimg2");
const t3 = document.getElementById("teamimg3");

const dott2 = document.getElementById("dot2team");
const dott3 = document.getElementById("dot3team");
const dott1 = document.getElementById("dot1team");
var temp1 = 0;
function showT1(){
           
    t1.style.display = "block";
    t2.style.display = "none";
    t3.style.display = "none";
    dott1.style.backgroundColor = "#116694";
    dott2.style.backgroundColor = "white";
    dott3.style.backgroundColor = "white";
}
function showT2(){
           
    t2.style.display = "block";
    t1.style.display = "none";
    t3.style.display = "none";
    dott2.style.backgroundColor = "#116694";
    dott1.style.backgroundColor = "white";
    dott3.style.backgroundColor = "white";
}
function showT3(){
           
    t3.style.display = "block";
    t2.style.display = "none";
    t1.style.display = "none";
    dott3.style.backgroundColor = "#116694";
    dott2.style.backgroundColor = "white";
    dott1.style.backgroundColor = "white";
}

function checkIfHide2(){

    if($(".dotcon2").is(':hidden') == true)
    {

        t1.style.display = "block";
        t2.style.display = "block";
        t3.style.display = "block";

    }
    if(window.innerWidth<=1000 && temp1==0){

        t2.style.display = "none";
        t3.style.display = "none";
        temp1 = 1;

    }
    if(window.innerWidth>=1000){

        temp1 = 0;

    }



}


setInterval(checkIfHide2, 0);
