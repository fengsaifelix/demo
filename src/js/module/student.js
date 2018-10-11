define(['jquery', 'apple'], function ($, apple) {
    const student = {};
    student.name = 'zhangsan';
    student.eat = function () {
        console.log(this.name + ' like ' + apple.name);
    };
    student.say = function () {
        var str = 'I eat '
            + apple.num + apple.unit + ' ' + apple.name
            + ', and pay ' + apple.total().toFixed(2) + 'RMB everyday.';
        // $('#box').text(str);
        console.log(str);
    };
    //总之，返回一个对象就行
    return student;
});
 