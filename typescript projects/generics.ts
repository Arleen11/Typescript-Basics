const score : Array<number> = []
const names: Array<string> = []


function identity1(val: boolean| number): boolean |number{
    return val
}

function identity2(val : any): any{
    return val
}

function identity3<Type>(val: Type): Type{   //type can store any value
    return val
}


function identity4<A>(val : A): A{
    return val
}

interface Bottle{
    brand: string,
    type: number
}
identity4<Bottle>({})