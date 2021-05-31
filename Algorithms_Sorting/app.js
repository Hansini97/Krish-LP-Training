// Requiring module
const express = require('express');

const BubbleSortAlgorithm = require("./bubble");
const InsertionSortAlgorithm = require("./insertion");
const MergeSortAlgorithm = require("./merge");
const QuickSortAlgorithm = require("./quick");
const SelectionSortAlgorithm = require("./selection");

 
// Creating express object
const app = express();
 
// Handling GET request
app.get('/', (req, res) => {
    res.send("<h1> Bubble Sort Algorithm: </h1>" + "{" + BubbleSortAlgorithm + "}");
})

app.get('/insertion', (req, res) => {
  res.send("<h1> Insertion Sort Algorithm: </h1>" + "{" + InsertionSortAlgorithm + "}");
})

app.get('/merge', (req, res) => {
  res.send("<h1> Merge Sort Algorithm: </h1>" + "{" + MergeSortAlgorithm + "}");
})

app.get('/quick', (req, res) => {
  res.send("<h1> Quick Sort Algorithm: </h1>" + "{" + QuickSortAlgorithm + "}");
})

app.get('/selection', (req, res) => {
  res.send("<h1> Selection Sort Algorithm: </h1>" + "{" + SelectionSortAlgorithm + "}");
})
 
// Port Number
const PORT = process.env.PORT ||5000;
 
// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));