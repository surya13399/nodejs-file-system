import express, { request } from "express";
import fs from 'fs/promises';
// const fs = require('fs');

const app = express();
app.use(express.json());
const port = 5001;

app.get("/", (request, response) => {
  const dateTime = new Date();
  response.send("Welcome to NodeJS File System :" +dateTime);
});

async function readFile(filePath) {
  try {
    const data = await fs.readFile(filePath);
    console.log(data.toString());
  } catch (error) {
    console.error(`Got an error trying to read the file: ${error.message}`);
  }
}

app.get("/get-file", async (request, response) => {
  const data = request.readFile('date-time.txt');
  // const data = await readFile('date-time.txt')
  console.log(data);
  response.send("sucess : " +data.toString());
})



// readFile('date-time.txt');

async function openFile() {
  try {
    const dateTimeHeaders = 'date'
    await fs.writeFile('date-time.txt', dateTimeHeaders);
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

async function addDateTime(date) {
  try {
    const dateTimeLine = `\n${date}`
    await fs.appendFile('date-time.txt', dateTimeLine, { flag: 'a' });
  } catch (error) {
    console.error(`Got an error trying to write to a file: ${error.message}`);
  }
}

// (async function () {
//   await openFile();
//   await addGroceryItem(Date);
// })();

app.post("/date-time-save", async (request, response) => {
  const date = new Date();
  //  await openFile();
   await addDateTime(date);

  response.send("Sucess : " + date);
  // const result = ;
})



app.listen(port, () => console.log("Server is running on port : ", port));
