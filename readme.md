
after excuting the programm , this is the output I get

Melisas-MBP-3:ALAB30841 admin$ node index.js
list of arrays of the CSV filetransformed 
[ 'ID', 'Name', 'Occupation', 'Age' ]
[ '42', 'Bruce', 'Knight', '41' ]
[ '57', 'Bob', 'Fry Cook', '19' ]
[ '63', 'Blaine', 'Quiz Master', '58' ]
[ '98', 'Bill', 'Doctor’s Assistant', '26' ]
NEW ARRAY CONTAINING OBJECT 
{ ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' }
{ ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' }
{ ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' }
{ ID: '98', Name: 'Bill', Occupation: 'Doctor’s Assistant', Age: '26' }
remove the last element"object
{ ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' }
{ ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' }
{ ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' }
add at index 1 this object { id: "48", name: "Barry", occupation: "Runner", age: "25" } 
{ ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' }
{ id: '48', name: 'Barry', occupation: 'Runner', age: '25' }
{ ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' }
{ ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' }
add at the end this object { id: "7", name: "Bilbo", occupation: "None", age: "111" }
{ ID: '42', Name: 'Bruce', Occupation: 'Knight', Age: '41' }
{ id: '48', name: 'Barry', occupation: 'Runner', age: '25' }
{ ID: '57', Name: 'Bob', Occupation: 'Fry Cook', Age: '19' }
{ ID: '63', Name: 'Blaine', Occupation: 'Quiz Master', Age: '58' }
{ id: '7', name: 'Bilbo', occupation: 'None', age: '111' }
Tansform the final set of data back into CSV format.

ID,Name,Occupation,Age\n42,Bruce,Knight,41\n48,Barry,Runner,25\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n7,Bilbo,None,111\n
Melisas-MBP-3:ALAB30841 admin$ 