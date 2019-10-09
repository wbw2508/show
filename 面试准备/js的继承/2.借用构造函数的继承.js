//不适用原型的方式复制父类的实例属性（构造函数）
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
    Parent.call(this);
    this.name = name;
    this.age = age
}

var son1 = new Son('小明','10');
console.log(son1.name,son1.age) //小明  10
son1.sayHello(); //我的名字是小明，我今年10岁了
console.log(son1.money); //[1000]
// son1.makeMoney(2000);  //error
console.log(son1 instanceof Son); //true
console.log(son1 instanceof Parent); //false

/*优点：
* 这种继承方式解决了传统继承中共享引用属性的问题；
创建子类实例的时候可以向父级传递参数；
可以继承多个父类；
*
* 缺点：
* 只能继承父类构造函数里面的属性方法，不会继承父类原型上的属性方法；
 无法实现函数复用，每个子类都有父类实例的副本，影响性能；
实例只是子类的实例不是父类的实例。
* */