let a=document.getElementById("input")
let b=document.getElementById("password")

function SUBMIT(){
    if(a.value==="" && b.value===""){
        alert("enter data")
    }
    else {
        alert('Form submitted successfully!');
    }
}
function RESET(){
    a.value="";
    b.value="";
}