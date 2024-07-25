#!/usr/bin/env node
import name from '../src/cli.js';

console.log("Welcome to the Brain Games!");
var inputName = name();
console.log(`Hello, ${inputName}!`);
