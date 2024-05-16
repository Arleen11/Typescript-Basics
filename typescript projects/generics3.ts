interface Database{
    connection: string,
    username: string,
    password: string
}



function hello<T, U extends Database>(valOne: T,valTwo: U):object{
    return{
        valOne,
        valTwo
    }
}

//hello(5, )

interface Course{
    name: string,
    author: string,
    subject: string
}

class Syllable<T>{
    public cart: T[]= []

    addToCart(products : T){
        this.cart.push(products)
    }
}
