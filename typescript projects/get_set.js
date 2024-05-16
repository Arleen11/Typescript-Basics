var person = /** @class */ (function () {
    function person(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        this.city = 'Kathmandu';
    }
    Object.defineProperty(person.prototype, "getAppleEmail", {
        get: function () {
            return "apple".concat(this.email);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(person.prototype, "courseCount", {
        get: function () {
            return this._courseCount;
        },
        set: function (courseNum) {
            if (courseNum <= 1) {
                throw new Error('the course count should not be greater than one');
            }
            else {
                this._courseCount = courseNum;
            }
        },
        enumerable: false,
        configurable: true
    });
    return person;
}());
var ram = new person('ram@gmail.com', 'harihari');
console.log(ram.name);
