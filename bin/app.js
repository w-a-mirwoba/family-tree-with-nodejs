#!/usr/bin/env node
"use strict";

const chalk = require('chalk')
const readline = require('readline');
const args = process.argv

let validate = require('./src/validators.js');
let usage = require('./src/help.js');
var initialFamily = require('./src/lengaburu.js');
let addChild = require('./src/addchild.js');
let relationship = require('./src/relationship.js');
let initialFamilyMembers  = initialFamily();
var allFamily = [];

//const commands = ['ADD_CHILD', 'GET_RELATIONSHIP', 'HELP']
  
  // we make sure the length of the arguments is exactly three
  if (args.length > 3) {
    validate.errorLog(`only one argument can be accepted`)
    usage()
  }

  //Start app
  function StartApp() {

    console.log("App is loading initial family members");
    for(var key in initialFamilyMembers ) {
      allFamily.push(initialFamilyMembers[key]);
  }
  console.log("Initial family tree created");
    
    const rl = readline.createInterface(process.stdin, process.stdout);
    
    function promptInput (prompt, handler)
    {
        rl.question(prompt, input =>
        {
            if (handler(input) !== false)
            {
                promptInput(prompt, handler);
            }
            else
            {
                rl.close();
            }
        });
    }
    
    promptInput('app> ', input =>
    {
    
    var consoleInput = input.split(/(\s+)/);
    consoleInput  = consoleInput .filter(function(e) {return String(e).trim(); });
    console.log(consoleInput );
    input = consoleInput [0] ;

      switch (input)
        {
            case  'ADD_CHILD':
              addChild(consoleInput [1], consoleInput [2], consoleInput [3], allFamily)
                break;
            case 'GET_RELATIONSHIP':
                relationship.getFamilyRelationship(consoleInput [1], consoleInput [2], allFamily)
                break;
            case 'exit':
                console.log('Bye!');
                return false;
        }
      
    
    });

   
  }


  //Call the correct class for each command
    switch(args[2]) {
        case 'HELP':
        usage()
        break
        case 'START':
        StartApp()
        break
        default:
        validate.errorLog('invalid command passed')
        usage()
    }
    