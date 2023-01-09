document.getElementById("btnResult").onclick = function(){
    let number = document.getElementById("number").value * 1;

    let result = '';
    for(let i = 2; i <= number;i++){
        let checkSNT = kiemTraSoNT(i);
        if(checkSNT){
            result += i + " ";
        }
    }
    document.getElementById("showResult").innerHTML = result;
}
function kiemTraSoNT(number){
    let laSoNT = true;
    for(let i = 2; i <= Math.sqrt(number); i++){
        if(number % i === 0){
            laSoNT = false;
            break;
        }
    }
    return laSoNT;
}