let num = document.getElementById("num")
let plus = document.getElementById("up")
let minus = document.getElementById("down")
let reset = document.getElementById("reset")
let count = 0

plus.onclick= () =>{
    console.log("Clicked")
    count=count+1;
    updateValue(count)
    
}
minus.onclick= () =>{
    console.log("Clicked")
    count=count-1
    updateValue(count)
    
}
reset.onclick=()=>{
    count=0
    updateValue(count)
}

function updateValue(count){
    num.innerText= count;
}