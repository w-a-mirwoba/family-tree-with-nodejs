"use strict";
    // usage represents the help guide
const help = function() {
    const usageText = `
    Meet the family  is set on the planet of Lengaburu, the
    distant galaxy of Tara B. Our protagonists are King
    Arthur, Queen Margaret and their family. 
    King Arthur is the emperor of Lengaburu and has been
    ruling the planet for the last 350 years. Get to know
    the family or add any new member.
  
    usage:
    meetthefamily <command>
  
      commands can be:
  
      START:             To start the application
      ADD_CHILD:         To add anew family child member
      GET_RELATIONSHIP:  Used to retrieve familymembers and relationships
      HELP:              used to print the usage guide
      exit:              Exit the app
    
      The diffrent relationship prompts are 
      son
      daughter 
      sibling 
      Maternal-Aunt
      Maternal-Uncle
      Paternal-Uncle
      Sister-In-Law
      Brother-In-Law

      Sample how to get a relation --> GET_RELATIONSHIP lucy sibling 
      sample of how to add a child --> ADD_CHILD John Lucy  M 
    `
    console.log(usageText)
  }
  
  module.exports = help;