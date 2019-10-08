var global_json = null;

let app = new Vue({
  // bind it to the #root div in the DOM
  el: "#root",
  // provide data for bindings
  data: {
    message: 'Hello World',
  },
//   method: {
//       updateData(newJson){
//           message = newJson.rates;
//           return message;
//       }
//   }
});
async function parseJson(arg){
    const response = await fetch('https://api.exchangerate-api.com/v4/latest/' + arg);
    var json = await response.json();
    // var results = await app.updateData(json);
    app.message = Object.keys(json.rates);
    console.log(app.message);
    // console.log(Object.keys(json.rates));
    // console.log(json);
}
parseJson('USD');
