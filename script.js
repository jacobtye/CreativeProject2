/*global Vue*/
/*global fetch*/
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    message: 'USD',
    amount: 0,
    change: 7,
    rate: {},
  },

});
async function parseJson(arg){
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/' + arg);
    var json = await response.json();
    // var results = await app.updateData(json);
    app.message = Object.keys(json.rates);
    app.rate = json.rates;
    console.log(json.rates);
    // console.log(app.message);
    // console.log(Object.keys(json.rates));
    // console.log(json);
}
async function calcDiff(){
  event.preventDefault();
  var from = await document.getElementById("from_input").value;
  var amount = await document.getElementById("amount").value;
  var to = await document.getElementById("to_input").value;
  console.log(from, amount, app.rate[to])
  var change = await amount * app.rate[to];
  app.change = change;
}
document.getElementById("root").addEventListener("input", function(event) {
    event.preventDefault();
    calcDiff();

});
parseJson('USD');
