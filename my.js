var rates = null;
var myObj = null;
var rateKeys = null
var rateSelect = document.getElementById("rateSelect");
var amountToChange = document.getElementById("amountToChange");
var result = document.getElementById("result");

amountToChange.addEventListener('keyup', calculateRate);
rateSelect.addEventListener('change', calculateRate);



var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    myObj = JSON.parse(this.responseText);
    // console.log(myObj);
    getRates(myObj);
  }
};
xmlhttp.open("GET", "https://api.exchangeratesapi.io/latest", true);
xmlhttp.send();

function getRates(ratesJSON){
    rates = ratesJSON.rates;
    rateKeys = Object.keys(rates);

    for (var key in rates){
        var optionElem = document.createElement("option");
        var textNode = document.createTextNode(key);
        optionElem.appendChild(textNode);
        optionElem.setAttribute("value",rates[key]);
        rateSelect.appendChild(optionElem);
    }
    
}

// let calculateRate = () => {
function calculateRate(){

  let amount = parseInt(amountToChange.value);
  let rate = parseFloat(rateSelect.value);
  console.log(amount);
  console.log(rate);
  
  if (!isNaN(amount)) {
    let money = amount * rate;

    result.value = money.toFixed(2);
  
  } else {

    result.value = "Oops! Be careful!"

  }

  


}
