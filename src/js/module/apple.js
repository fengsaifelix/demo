define(function () {
    const apple = {};
    apple.name = 'apple';
    apple.num = 5;
    apple.price = 10;
    apple.unit = 'kg';
    apple.total = function () {
        return this.num * this.price
    };
    //总之，返回一个对象就行
    return apple;
}); 