// 子类与父类共享一个原型，继承父类原型属性方法
function Parent(name,age) {
    this.name = name || '';
    this.age = age;
    this.money = [1000];
    this.sayHello = function () {
        console.log('我的名字是' + this.name  + ',我今年' + this.age + '岁了');
    }
}
Parent.prototype.makeMoney = function (money) {
    this.money.push(money);
};

//为父级原型增添一些属性
Parent.prototype.money = [2000];
function Son(name,age) {
        this.name = name;
        this.age = age;
}
Son.prototype = Parent.prototype;

var son1 = new Son('小明',10);
console.log(son1.name,son1.age); //小明 10
// son1.sayHello(); //TypeError: son1.sayHello is not a function
console.log(son1.money); //[2000]
// son1.makeMoney(3000); //TypeError: son1.sayHello is not a function
console.log(new Son('小红',11).money); //[2000,3000]
console.log(son1 instanceof Son); //true
console.log(son1 instanceof Parent); //true

/*优点：
最简单的继承方式之一；

缺点：
只能继承父类原型属性方法，不能继承父类构造函数的属性方法；
子类共享原型上的引用属性。
*/
