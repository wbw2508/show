//js中传统的继承方式是原型链的形式：即将父类的实例作为子类（儿子）的原型
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
    this.name = name;
    this.age = age;
}

Son.prototype = new Parent('老王','32');
var son1 = new Son('小明','10');
console.log(son1.name,son1.age) //小明  10
son1.sayHello(); //我的名字是小明，我今年10岁了
console.log(son1.money); //[1000]
son1.makeMoney(2000);
console.log('son1.money after: ',son1.money)  //[1000,2000]
var son2 = new Son('小红','11');
console.log(son2.money);
console.log(son1 instanceof Son); //true
console.log(son1 instanceof Parent); //true
/*优点：这是一个非常纯粹的继承，实例是子类的实例，也属于父级的实例，
父类的属性方法以及父类原型上添加的属性或方法，子类都可以访问得到；
缺点：1.原型对象上的引用属性，所有的实例都是共享的，即在一个实例上修改，
所有的实例均跟着变化；
2.不能同时继承多个父类。
*/



