
let validate = require('./validators.js');
let usage = require('./src/help.js');

//get a key for any elemnt we want
function getKey(arr, key) {
    return arr.map(function (obj) {
      return   obj[key] ;}).join(', ');
  }

//get a children mothers name from parents
function getChildMotherName(filterArray){
    let motherName;

    if(filterArray.find(obj => obj.gender === 'F')){
        motherName = filterArray[0].name;

    }else if(filterArray.find(obj => obj.gender === 'M')){
        motherName = filterArray[0].spouse;
        
    }else{
        console.log( "Cannot get mothers name");
    }

    return motherName;

}

//get sibling
function getSibling(name, allFamily){

    var familyMember = allFamily.filter((obj) => {return obj.name === name});
    let  motherName = getKey(familyMember , 'mothersName');
    var sibling= allFamily.filter((obj) => {return obj.mothersName === motherName && obj.name !== name});
   // console.log( getKey(sibling , 'name'));
    return sibling;
}

//get son or daughter
function getChild(name, gender, allFamily){
    var children = [];
   
    //filter out to check if the user has a spouse
    children =  allFamily.filter((obj) => {
        return obj.spouse !== undefined && obj.name === name
    });

    if(children.length == 1 && gender == "F"){
        motherName = getChildMotherName(children);
        children = allFamily.filter((obj) => {return obj.mothersName === motherName && obj.gender === "F"});
        console.log( getKey(children , 'name'));
    }else if(children.length == 1 && gender == "M"){
        motherName = getChildMotherName(children);
        children = allFamily.filter((obj) => {return obj.mothersName === motherName && obj.gender === "M"});
        console.log( getKey(children , 'name'));
    }else{
        console.log( "NONE");
    }
        

}

//get maternal aunt and uncle
function getMaternal(name, gender, allFamily){
    var familyMember = allFamily.filter((obj) => {return obj.name === name});
    let  motherName = getKey(familyMember , 'mothersName');
    let maternal = getSibling(motherName, allFamily);

    if(gender == 'F'){
        maternal = maternal.filter((obj) => {return obj.gender === 'F'});

    }else if(gender == 'M'){
        maternal = maternal.filter((obj) => {return obj.gender === 'M'});
    }

        return maternal;
}

//get paternal aunt and uncle
function getPaternal(name, gender, allFamily){
    var familyMember = allFamily.filter((obj) => {return obj.name === name});
    let  motherName = getKey(familyMember , 'mothersName');
    
    let  fatherName = allFamily.filter((obj) => {return obj.spouse === motherName});
        fatherName = getKey(fatherName , 'name');
    let paternal = getSibling(fatherName, allFamily);
   
    if(gender == 'F'){
        paternal = paternal.filter((obj) => {return obj.gender === 'F'});

    }else if(gender == 'M'){
        paternal = paternal.filter((obj) => {return obj.gender === 'M'});
    }

        return paternal;
}

//get paternal aunt and uncle
function getInLaws(name, gender, allFamily){
    ;
    var finalInLaws = []; 
    var familyMember = allFamily.filter((obj) => {return obj.name === name});
    let  spouse = getKey(familyMember , 'spouse');

    let inLaws = getSibling(spouse, allFamily);

    if(gender == 'F'){
        spouse = getKey(inLaws, 'spouse');

        inLaws = inLaws.filter((obj) => {return obj.gender === 'F'});
        finalInLaws = getKey(inLaws, 'name') ;
        const getinlaws = finalInLaws .concat( ' ',spouse)

       console.log( getinlaws  );

    }else if(gender == 'M'){
        spouse = getKey(inLaws, 'spouse');
        inLaws = inLaws.filter((obj) => {return obj.gender === 'M'});
        finalInLaws = getKey(inLaws, 'name') ;
        const getinlaws = finalInLaws .concat( ' ',spouse)

       console.log( getinlaws  );
    }
    
    //return getinlaws ;     
}

//sort the family relationship
function getFamilyRelationship(name, relationship, allFamily) {
    var name= validate.capitalize(name)
    var relationship = validate.capitalize(relationship)

    switch(relationship) {
        case 'Sibling':
            console.log(getKey(getSibling(name, allFamily), 'name'));
        break
        case 'Daughter':
            getChild(name, 'F', allFamily)
        break
        case 'Son':
            getChild(name, 'M', allFamily)
        break
        case 'Maternal-Aunt':
            console.log(getKey( getMaternal(name, 'F', allFamily), 'name'));
        break
        case 'Maternal-Uncle':
            console.log(getKey(getMaternal(name, 'M', allFamily), 'name'));
        break
        case 'Paternal-Aunt':
            console.log(getKey( getPaternal(name, 'F', allFamily), 'name'));
        break
        case 'Paternal-Uncle':
            console.log(getKey(getPaternal(name, 'M', allFamily), 'name'));
        break
        case 'Sister-In-Law':
           // console.log(getKey( getInLaws(name, 'F', allFamily), 'name') );
           getInLaws(name, 'F', allFamily)
        break
        case 'Brother-In-Law':
           // console.log(getKey( getInLaws(name, 'M', allFamily), 'name'));
           getInLaws(name, 'M', allFamily)
        break
        
        default:
        validate.errorLog('invalid command passed')
        usage()
    }

}


module.exports =  {
    getFamilyRelationship : getFamilyRelationship,

}