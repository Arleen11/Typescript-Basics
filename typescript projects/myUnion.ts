// let score :number | string = 40
// score = 35
// score = 'ijijij'

type Users = {
    name: string;
    id: number 

}
type Admin = {
    username: string;
    id: number 

}
let arleen: Users | Admin = {name: 'hello', id:3758}

arleen = {username: 'hello', id: 3758}

// function getDbId(id : number| string ){

//     console.log(`DB id is : ${id}`);
    
// }
getDbId(5)
getDbId('kiopl')

function getDbId(id : number | string ){
    if (typeof id === 'string'){
        id.toLowerCase()
    }

}
 
//array
const data : (string | number| boolean)[] = ['1', '2' , 3, true]


// let pi: 3.14 = 3.14
// pi = 8.99
//another example

let seatAllotment: 'aisle' |'middle'| 'window'
seatAllotment = 'aisle'
//seatAllotment = 'crew'; //not assignable
