/*global Vue*/
/*global fetch*/
let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    message: 'USD',
    amount: 0,
    change: 0,
    rate: {},
    to: 'USD',
  },

});
async function changeTo(arg){
  app.to = arg;
}
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
  var amount = await app.amount;
  var to = await document.getElementById("to_input").value;
  console.log(amount, app.rate[to]);
  var change = await amount * app.rate[to];
  app.change = change;
}
document.getElementById("root").addEventListener("input", function(event) {
    event.preventDefault();
    calcDiff();

});
parseJson('USD');
