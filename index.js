

//Part 2: Expanding Functionality

const CSVFILE ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

const CSVArray = [];
count = 0;
let rowCSVArray =[]
let word = "";
for(let c of CSVFILE) {
    if(c !== "\n" && count !== CSVFILE.length-1 ){
        if(c !== ','){
           word = word + c ; 
        }else {
            rowCSVArray.push(word)
            word = "";
        }
    }else {
        //logic for last character of the text
        if(count == CSVFILE.length-1) word = word + c;

        rowCSVArray.push(word)
        word = "";
        CSVArray.push(rowCSVArray);
        rowCSVArray =[]
    }
    count ++;
}
// illustrate all the rows of the CSV Array
console.log(`list of arrays of the CSV filetransformed `)
CSVArray.forEach(row =>{
    console.log(row)
})




//Part 3: Transforming Data

const CSVArrayObject = []


let keyRow =[]
for (let i=0 ; i < CSVArray.length ; i++) {
  
    if (i == 0) {
        keyRow = CSVArray[0]
    }else {
        let object ={}
        keyRow.forEach((key,index) => {
            object[key] = CSVArray[i][index]
        })
       CSVArrayObject.push(object)
    }

}
// illustrate all the object in the array 
console.log(`NEW ARRAY CONTAINING OBJECT `)
for(object of CSVArrayObject){
    console.log(object)
}

// { ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' }
// { ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' }
// { ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' }
// { ID: '98', Name: 'Bill', Occupation: 'Doctor’s Assistant', Age: '26' }



//Part 4: Sorting and Manipulating Data


// Remove the last element from the sorted array.
// Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }
// Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

//sort the Array of object
CSVArrayObject.sort();

//remove the last element"object"
console.log(`remove the last element"object`)
  CSVArrayObject.pop()
  for(object of CSVArrayObject){
    console.log(object)
}



// add at index 1 this object { id: "48", name: "Barry", occupation: "Runner", age: "25" }


CSVArrayObject.splice(1,0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" })
console.log(`add at index 1 this object { id: "48", name: "Barry", occupation: "Runner", age: "25" } `)
for(object of CSVArrayObject){
    console.log(object)
}

 // add at the end this object { id: "7", name: "Bilbo", occupation: "None", age: "111" }
console.log(`add at the end this object { id: "7", name: "Bilbo", occupation: "None", age: "111" }`)
 CSVArrayObject.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" })
 for(object of CSVArrayObject){
    console.log(object)
}



// back to CSV file

let newCSVFile = "";

CSVArrayObject.forEach((object,index)=> {
    if(index == 0) {
        // extract keys from object at once and store it in key Text that's why index 0 is chosen arbitrary
        let keyText = ""
       for(key in object){
        keyText = (keyText !=="")? keyText+`,`+ key : keyText + key ;
       }
       newCSVFile = keyText + `\\n`;
     }
     let lengthCount = 0 ;
     for(key in object) {
        // add a logic to avoid adding coma "," at the beginning and at the end of text , \n will be added instead
        newCSVFile = (lengthCount !== object.length-1 && lengthCount!=0)? newCSVFile + `,` + object[key] : newCSVFile + object[key] ; 
        lengthCount ++;
     }
     newCSVFile = newCSVFile + '\\n';
       
})
console.log('Tansform the final set of data back into CSV format.\n')
console.log(newCSVFile)