 // let sales: number = 123_456_789;
// let course: string = 'typeScript';
// let is_published: boolean = true;
// function render(document: any){
//     console.log(document);
// }
// let numbers: number [] = []
// numbers[0] = 1;
// numbers[1] = 3;
// let user: [number, string] = [1, 'arleen']
// user.push(1);
// console.log(user);
// const enum Direction {
//     up = 1,
//     down = 2,
//     left = 3,
//     right = 4
// }
// let direction : Direction = Direction.right
// console.log(direction);
function calculateTax(income, taxYear) {
    if (taxYear === void 0) { taxYear = 2022; }
    if (income < 50000 && taxYear < 2024)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
console.log(calculateTax);
