const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");
const menu = require("./menu.json");
var bodyParser = require('body-parser')
const sgMail = require('@sendgrid/mail')
require('dotenv').config();


const MONGO_URI =
  "mongodb+srv://baz:baz@cluster0.0bthm.mongodb.net/?retryWrites=true&w=majority";
const MONGO_DB_NAME = "Reservations";
let dbConnection;

const connect = async () => {
  try {
    const client = await MongoClient.connect(MONGO_URI);
    dbConnection = client.db(MONGO_DB_NAME);
  } catch (e) {
    throw new Error(`Could not establish database connection: ${e}`);
  }
};

app.use(bodyParser.json())

const mongoClient = async (collectionName) => {
  if (!dbConnection) {
    await connect();
  }
  if (collectionName) {
    return dbConnection.collection(collectionName);
  }
  return dbConnection;
};

app.get("/menu", function (req, res) {
  return res.send(menu["Burgers"]);
});

app.post("/reserve",  (req, res) => {
    insert(req.body);
    sendMail(req.body.email, "Reserved!!", `Dear ${req.body.name}, Your table is reserved on ${req.body.date}`);
});

app.listen(3000, function () {
  console.log("[OK] = HTTP Server listening on: http://localhost:3000");
});

const insert = async (data) => {
  dbConnection = await mongoClient("reservations");
  console.log(dbConnection);
  if (!dbConnection) {
    console.log("Error");
  }
  await dbConnection.insertOne(data).catch((err) => {
    console.error(err);
  });
};


async function sendMail(to, subject, text,  html,) {
  const msg = {
    to: to, // Change to your recipient
    from: 'mk.elbaz9248@gmail.com', // Change to your verified sender
    subject: subject,
    text: text,
    html: html
  }
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode)
      console.log(response[0].headers)
    })
    .catch((error) => {
      console.error(error)
    })

}

module.exports = {
  mongoClient,
};
