const chalk = require('chalk')

 // used to log errors to the console in red color
 function errorLog(error) {
    const eLog = chalk.red(error)
    console.log(eLog)
  }

  //check if there is such a spouse before adding a cild
function checkIfMOtherExist(allFamily, mName) {
    const motherExists = allFamily.some(allFamily => allFamily.mothersName === mName);
    return  motherExists
}

//capitalize first letter of a text
function capitalize (text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}


module.exports = {
    checkIfMOtherExist:checkIfMOtherExist,
    capitalize:capitalize,
    errorLog: errorLog
}