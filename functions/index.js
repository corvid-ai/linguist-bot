// const auth = require('../src/auth')
const functions = require("firebase-functions");
const { WebhookClient } = require("dialogflow-fulfillment");
const {
  Text,
  Card,
  Image,
  Suggestion,
  Payload,
} = require("dialogflow-fulfillment");

process.env.DEBUG = "dialogflow:debug"; // enables lib debugging statements

exports.linguistFufillment = functions.https.onRequest((request, response) => {
  const agent = new WebhookClient({ request, response });
  console.log("Dialogflow Request headers: " + JSON.stringify(request.headers));
  console.log("Dialogflow Request body: " + JSON.stringify(request.body));

  function welcome(agent) {
    agent.add("Welcome to linguist, I curate data on the Akan language ");
    agent.add("Would you like to translate...");
    agent.add(new Suggestion("color"));
    agent.add(new Suggestion("days"));
    agent.add(new Suggestion("parts of the body"));
  }

//   Have to implement these
  function days(agent) {}
  function body_parts(agent){}
  function color(agent){}

  let intentMap = new Map();
  intentMap.set("Default Welcome Intent", welcome);
  agent.handleRequest(intentMap);
});
