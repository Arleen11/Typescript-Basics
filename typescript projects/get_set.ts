
class person{
    private _courseCount: number  = 1
    readonly city: string ='Kathmandu'
    constructor(
        public email: string,
        public name: string
    ){}

    get getAppleEmail(): string{
        return `apple${this.email}`
    }
    get courseCount(): number{
        return this._courseCount
}
    set courseCount (courseNum){
    if(courseNum <= 1 ) {
        throw new Error('the course count should not be greater than one')
    }else{
    this._courseCount = courseNum
    }
}
}
const ram = new person('ram@gmail.com', 'harihari' )
console.log(ram.name);
