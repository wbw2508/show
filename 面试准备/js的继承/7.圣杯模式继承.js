/*这种方式是将共享原型继承和借用构造函数继承结合使用，通过中间
函数的方式，砍掉父类的实例属性，这样，在调用两次父类的构造的时候，
就不会初始化两次实例的属性和方法了，避免了组合继承的缺点。
调用父级构造函数继承父类实例属性方法。*/
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
function Son(name,age) {
    Parent.call(this,name,age);
}
function inherit(Children,Parent) {
    function Temp() {}
    Temp.prototype = Parent.prototype;
    Children.prototype = new Temp();
    Children.prototype.constructor = Children;
    Children.prototype.uber = Parent;
}

inherit(Son,Parent);
var son1 = new Son('小明',10);
console.log(son1.name,son1.age); //小明 10
son1.sayHello();//我的名字是小明,我今年10岁了
console.log(son1.money); //[ 1000 ]
son1.makeMoney(3000);
console.log(son1.money); //[ 1000, 3000 ]
console.log(new Son('小红',11).money); //[ 1000 ]
console.log(son1 instanceof Son); //true
console.log(son1 instanceof Parent); //true
/*
* 优点：
堪称完美；

缺点：
实现复杂；
不能实现多继承。*/