// class person{
//     public email: string
//     name: string
//     private readonly city: string = 'Kathmandu'
//     constructor(email: string, name : string){
//         this.email = email;
//         this.name = name
//     }
// }
// const ram = new person('ram@gmail.com', 'ram')
// console.log(ram.email);
//short method
var person = /** @class */ (function () {
    function person(email, name) {
        this.email = email;
        this.name = name;
        this.city = 'Kathmandu';
    }
    return person;
}());
var ram = new person('ram@gmail.com', 'harihari');
console.log(ram.name);
