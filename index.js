let outscreen= document.getElementById("output")
function display(num){
    outscreen.value += num;
}

function Calculate(){
    try{
    outscreen.value= eval(outscreen.value)
    }
    catch(err){
        alert("Invalid")
    }
}

function Clear(){
    outscreen.value=""
}

function del(){
    outscreen.value= outscreen.value.slice(0,-1)
}