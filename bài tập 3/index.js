document.getElementById("btnResult").onclick = function(){
    let number = document.getElementById("number").value * 1;

    let result = 1;
    for(let i = 1; i <= number; i++){
        result *= i;
    }

    document.getElementById("showResult").innerHTML = "Giai thừa là : " + result;
}