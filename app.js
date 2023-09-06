const height = document.getElementById("height")
const weight = document.getElementById("weight")
const head = document.getElementById("head")
function calculateBmi() {
    let h = height.value
    let w = weight.value
    let result = w / (h * h);
    console.log(result);
    if ( h && w) {
     head.innerHTML = "Your BMI is " + result.toFixed(2)  
    
}
else{
    head.innerHTML="plz enter height and weight"
}
}
$






