
let validate = require('./validators.js');

//Add a child 
function addChild(mName, cName, gender, allFamily) {
    var mName= validate.capitalize(mName)
    var cName= validate.capitalize(cName)
    var gender= validate.capitalize(gender)


    if (validate.checkIfMOtherExist(allFamily, mName) === true){
        let element = {name:cName , mothersName:mName , gender: gender };
        allFamily.push(element); 
       console.log("CHILD_ADDED")

    }else{
        console.log("CHILD_ADDITION_FAILED")
    }
        
    }

module.exports =  addChild;