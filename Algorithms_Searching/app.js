// Requiring module
const express = require('express');

const LinearSearchAlgorithm = require("./linear");
const BinarySearchAlgorithm = require("./binary");


 
// Creating express object
const app = express();
 
// Handling GET request
app.get('/linear', (req, res) => {
    res.send("<h1> Linear Search Algorithm: </h1>" + "{" + LinearSearchAlgorithm + "}");
})

app.get('/binary', (req, res) => {
  res.send("<h1> Binary Search Algorithm: </h1>" + "{" + BinarySearchAlgorithm + "}");
})


 
// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));