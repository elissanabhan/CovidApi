fetch('https://covid19.nuttaphat.com/v2/current')
  .then(response => response.json())
  .then(json => {
    array = json;
  });


function myFunction() {
  var countryinput = document.getElementById('country');
  countryinput = countryinput.value
  for (let i = 0; i < array.data.length; i++) {
    //console.log(array.data.length);
    var countryname = array.data[i].location;
    var cases2 = array.data[i].confirmed;
    if (countryinput == countryname) {
      var cases1 = document.createElement('P');
      cases1.innerHTML = "The number of corona cases in " + countryname + " is " + cases2
      var cases = document.getElementById('casesid');
      cases.replaceChild(cases1, cases.childNodes[0]);
      break;

    }
    else
      var cases1 = document.createElement('P');
    cases1.innerHTML = "Enter a valid country name"
    var cases = document.getElementById('casesid');
    cases.replaceChild(cases1, cases.childNodes[0]);
  }

}

/*require('dotenv').config();
var secrettik = process.env.tik;
var notsecrettok = process.env.tok;
const client = require('twilio')(notsecrettok, secrettik, {
    lazyLoading: true
  });
  client.messages.create({
    body: 'Hello hello: ',
    from: '+12514519951',
    to: '+96176476679'
    })
  .then(message => console.log(message));

*/

