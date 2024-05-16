function hello(valOne, valTwo) {
    return {
        valOne: valOne,
        valTwo: valTwo
    };
}
var Syllable = /** @class */ (function () {
    function Syllable() {
        this.cart = [];
    }
    Syllable.prototype.addToCart = function (products) {
        this.cart.push(products);
    };
    return Syllable;
}());
