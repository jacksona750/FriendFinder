// Dependencies
var express = require("express");
var path = require("path");

// Setting up the Express app
var app = express();
var PORT = 7050;

// Setting up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true}));
app.use(express.json());