var rates = null;
var myObj = null;
var rateKeys = null
var rateSelect = document.getElementById("rateSelect");


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