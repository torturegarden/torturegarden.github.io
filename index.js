console.log("asdsat");

const PI = 3.14;
//let x = window.prompt("Enter some shit");

//integer = Number(string); String() Boolean() 
//console.log(typeof variable)
//Math.method math functions

let x;

do{
x = document.querySelector(".continueButton.bgoButt.bgoTextButt")
}while(x == null)


let myButt = document.getElementById("myButton");
let eventContent = document.getElementsByClassName("event_content"); 
// if class event_content's innerHTML is in the list (Level 1..4):
//boldElements = document.getElementById("event_content").getElementsByTagName("b");
myButt.onclick = () =>{
    let x = Number(document.getElementById("x").value);
    let y = Number(document.getElementById("y").value);

    let magnitude = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
    let normalX = x / magnitude;
    let normalY = y / magnitude;

    document.getElementById("label1").innerHTML = "Magnitude: " + magnitude + " Normalized: " + normalX + ", " + normalY;
}

for(let lvl=1; lvl<5; lvl++)
{
    if (eventContent.innerHTML = `Level ${String(lvl)}`)
    {
        
    }

}

myButt.addEventListener("mouseover", testA);
//myButt.addEventListener("mouseover", testB);

myButt.addEventListener("mouseout", testAx);
//myButt.addEventListener("mouseout", testBx);

desc = document.createElement("div");

desc.style.position = "fixed";
desc.style.bottom = "0px";
desc.style.right = "0px";
desc.style.width = "300px";
desc.style.border = "3px solid #73AD21";
//if text is in 
function testA(){
    alert(myButt.innerHTML);
    document.body.append(desc);
    
}

function testAx(){

    desc.remove();
    
}

function testB(){
    desc.innerHTML = 'success';

    document.body.append(desc);
    
}
function testBx(){

    desc.remove();
    
}



