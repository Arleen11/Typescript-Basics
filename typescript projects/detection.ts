// function detectType(val: number |string |number[]){
//     //
//     if (typeof val === 'string'){
//         return val.toLowerCase()
//     }
//     return val +_3
// }

// function provideId(id : string| null){
//     if(!id){
//             console.log('pleaase provide id');
//             return
//     }
//     id.toLowerCase()
// }

type Fish = {swim : () => void}
type Bird = {fly : ()=> void}

function isFish(pet: Fish| Bird): pet is Fish{
    return (pet as Fish).swim !== undefined
}

function food(pet : Fish | Bird){
    if(isFish(pet)){
        pet 
        return 'fish food'
    }else 
    pet
    return 'bird food'

}

interface Circle{
    kind : 'circle',
    radius : number
}

    interface Square{
        kind : 'Square',
        side : number
    }

    interface Rectangle{
        kind: 'rectangle',
        length: 'number',
        width: number 
    }

    type Shape = Circle | Square | Rectangle

    function getTrueShape(shape: Shape){
        if(shape.kind === 'circle') {
            return Math.PI* shape.radius ** 2
        }
        return shape.side * shape.side
    }

function getArea (shape: Shape){
    switch(shape.kind){
        case 'circle':
            return Math.PI*shape.radius **2

        case "Square":
                return shape.side * shape.side
        
        case 'rectangle':
        return shape.length* shape.width 

         default:
            const _default:never = shape
            return _default
    }
}
