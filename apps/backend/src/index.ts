
import express from "express";
import { VALUE, BACKEND_URL } from "@repo/common";
const app = express();
const port = 3001;

console.log("VALUE from common package:", VALUE);
console.log("BACKEND_URL from common package:", BACKEND_URL);
app.get('/', (req, res) => {
  res.send('Hello World from Backend!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});