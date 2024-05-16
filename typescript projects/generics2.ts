interface Bottle{
    brand: string,
    type : number
}

function getSearchProducts<T>(products: T[]): T{
    const myIndex = 3
    return products[3]
}

const getMoreSearchProducts = (products: number[]): number=>  {
    const myIndex = 4
    return products[myIndex]
}