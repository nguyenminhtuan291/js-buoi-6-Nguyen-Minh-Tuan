document.getElementById("btnResult").onclick = function(){
    let number = document.getElementById("number").value * 1;
    let sum = 0;
    let iSo = 0;
    // for( iSo = 1; sum < number; iSo++){
    //     sum += iSo;
    // }
    // iSo -= 1;
    while(sum < number){
        sum += iSo;
        if(sum < number){
            iSo++;
        }
    }
    document.getElementById("showResult").innerHTML = "Số nguyên nhỏ nhất là : " + iSo + "<br/>" + "Tổng là : " + sum;
}