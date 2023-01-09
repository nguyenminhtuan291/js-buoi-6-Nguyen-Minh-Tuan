document.getElementById("btnResult").onclick = function(){
  let soX = document.getElementById("soX").value * 1 ;
  let soN = document.getElementById("soN").value * 1;

  let tong = 0;
  for(let i = 1; i <= soN; i++){
      // Lũy thừa Math.pow hoặc **
      tong += soX**i;
  }

  document.getElementById("showResult").innerHTML = "Tổng là : " + tong;
}