exports.handler = function(context, event, callback) {
  const twiml = new Twilio.twiml.VoiceResponse();
  console.log(process.env);
  twiml.say('Hello World!');
  callback(null, twiml);
};
