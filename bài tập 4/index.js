document.getElementById("btnResult").onclick = function(){
  let number = document.getElementById("number").value * 1;

  let result = "";
  for(let i = 1; i <= number; i++){
      if(i % 2 === 0){
          result += "<div class='bg-danger text-white p-2'> div là số chẵn " + "</div>"  
      }else{
          result += "<div class='bg-primary text-white p-2'> div là số lẻ " + "</div>"  
      }

  }

  document.getElementById("showResult").innerHTML = result;
}