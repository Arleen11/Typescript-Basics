type user = {
    readonly _id : string 
    name: string
    email: string 
    isActive : boolean
    credCardDetails? : number
}

 
let myUser : user = {
    _id:"ooo",
    name: 'arleen',
    email: 'arl@gmail.com',
    isActive: false 
}

type cardNumber ={
    cardnumber : string
}

type cardDate = {
    cardDate : string 
}

type cardDetails = cardNumber & cardDate & {
    cvv: number 
}

myUser.email = 'arleen@gmail.com'
//myUser._id = 'hello'