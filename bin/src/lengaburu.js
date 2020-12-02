"use strict";
 function lengaburu() {
    return [
        { name: 'king Arthur',  gender: 'M' },
        { name: 'Queen Margret',  gender: 'F' },

        { name: 'Bill', mothersName: 'Queen Margret', gender: 'M' , spouse:'Flora'},
        { name: 'Flora',  gender: 'F', spouse:'Bill' },
        { name: 'Victorie', mothersName: 'Flora', gender: 'F', spouse:'Ted' },
         { name: 'Ted',  gender: 'M', spouse:'Victorie' },
         { name: 'Remus', mothersName: 'Victorie', gender: 'M' },
        { name: 'Dominique', mothersName: 'Flora', gender: 'F' },
        { name: 'Louis', mothersName: 'Flora', gender: 'M' },

        
        { name: 'Charlie', mothersName: 'Queen Margret', gender: 'M' },

        { name: 'Percy', mothersName: 'Queen Margret', gender: 'M' , spouse:'Audrey'},
        { name: 'Audrey', gender: 'F', spouse:'Percy' },
        { name: 'Molly', mothersName: 'Audrey', gender: 'F' },
        { name: 'Lucy', mothersName: 'Audrey', gender: 'F' },

        { name: 'Ronald', mothersName: 'Queen Margret', gender: 'M', spouse:'Helen' },
        { name: 'Helen', gender: 'F', spouse:'Ronald' },
        { name: 'Rose', mothersName: 'Helen', gender: 'F' , spouse:'Malfoy'},
         { name: 'Malfoy',  gender: 'M', spouse:'Rose' },
         { name: 'Draco', mothersName: 'Rose', gender: 'M' },
         { name: 'Aster', mothersName: 'Rose', gender: 'F' },
        { name: 'Hugo', mothersName: 'Helen', gender: 'M' },

        { name: 'Gineva', mothersName: 'Queen Margret', gender: 'F', spouse:'Harry' },
        { name: 'Harry',  gender: 'M', spouse:'Gineva' },
        { name: 'James', mothersName: 'Gineva', gender: 'M', spouse:'Darcy' },
         { name: 'Darcy',  gender: 'F', spouse:'James' },
         { name: 'William', mothersName: 'Darcy', gender: 'F' },
        { name: 'Albus', mothersName: 'Gineva', gender: 'M', spouse:'Alice' },
         { name: 'Alice',  gender: 'F', spouse:'Albus' },
         { name: 'Ron', mothersName: 'Alice', gender: 'M' },
         { name: 'Ginny', mothersName: 'Alice', gender: 'F' },
        { name: 'Lily', mothersName: 'Gineva', gender: 'F' }
    ];

}

module.exports = lengaburu;