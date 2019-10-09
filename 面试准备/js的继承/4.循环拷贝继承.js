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
    var p = new Parent(name,age);
    for(var prop in p){
        Son.prototype[prop] = p[prop];
    }
}

var son1 = new Son('小明',10);
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
可以将父类的所有属性和方法均继承下来；

缺点：
效率较低；
实例不属于父类的实例。*/