require('dotenv').config();

exports.handler = function(context, event, callback) {
  


  const twiml = new Twilio.twiml.VoiceResponse();
  
    const path = require('path');
    const parentDir = path.dirname(__dirname);
    console.log(parentDir);
  twiml.say('Hello World!');
  callback(null, twiml);
};
