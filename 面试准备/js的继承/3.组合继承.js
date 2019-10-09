/*将上述两种方法组合使用，通过调用父类的构造函数，继承父类构造函数内
的属性方法，然后通过将父类实例作为子类原型继承父类原型上的属性和方法，
实现函数复用，*/
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

Son.prototype = new Parent();
var son1 = new Son('小明','10');
console.log(son1.name,son1.age) //小明  10
son1.sayHello(); //我的名字是小明，我今年10岁了
console.log(son1.money); //[1000]
son1.makeMoney(3000);
console.log('son1.money after: ',son1.money)  //[1000,3000]
var son2 = new Son('小红','11');
console.log(son2.money);
console.log(son1 instanceof Son); //true
console.log(son1 instanceof Parent); //true

/*优点：
可以继承多个父类；
既可以继承父类构造函数里面属性和方法，又可以继承父类原型属性和方法；
函数可以复用；
父类的引用值不会共享；
缺点：
调用了两次父类的构造函数，产生了两份父类实例，多消耗了一点内存。*/
