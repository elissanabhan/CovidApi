require('dotenv').config(); 
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

console.log("message sent");