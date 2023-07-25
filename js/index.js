function calcTip(event) {
  event.preventDefault();
  var bill = document.getElementById("bill").value;
  var service = document.getElementById("serviceQual").value;
  var people = document.getElementById("people").value;

  if(bill == "" | service == 0) {
    alert("Por favor, preencha os valores")
    return;
  }
  
  if(people == "" | people <= 1) {
    people = 1;
    document.getElementById("each").style.display = "none"
  } else {
    document.getElementById("each").style.display = "block"
  }

  var gorjeta = (bill * service) / people;
  gorjeta = gorjeta.toFixed(2);
  document.getElementById("tip").innerHTML = gorjeta;
  document.getElementById('total').style.display = "block";
}

document.getElementById('total').style.display = "none";
document.getElementById('each').style.display = "none";
document.getElementById("tipsForm").addEventListener("submit", calcTip);
