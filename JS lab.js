// 题目1
var a = function(){}
a.b = 1
a.prototype.b = 2
a.prototype.c = 3
a.prototype.d = 4
console.log(a.b)  // 1
console.log(new a().b) //2

var foo = new a()
foo.c = 5
console.log(foo.c) //5
console.log(foo.d) //4
//请问console.log的输出？



// 题目2
var Foo = function(){
  this.a = 1
  return {
    a:2
  }
}

var bar = new Foo()
console.log(bar.a) //2
//请问console.log的输出？
/* 构造函数不需要返回值。
使用new来创建对象时，如果return的是非对象则会忽而略返回值;
如果return的是对象，则返回该对象。
*/

//题目3
var map = Object.create(null); // 没有原型
console.log("toString" in map); // false

var map = Object.create({a:1});
console.log("toString" in map); // true
console.log("a" in map); //true
//请问console.log的输出？



//题目4
function foo(obj){
  return Object.prototype.toString.call(obj).slice(8,-1)
}
//请说明函数foo的作用
/*
用call调用Object.prototype.toString应用在obj上

如果toString()在自定义对象中未被覆盖，则返回 "[object type]"

例如：
Object.prototype.toString.call([])    // "[object Array]"
Object.prototype.toString.call({})    // "[object Object]"
Object.prototype.toString.call(2)    // "[object Number]"

再通过slice从正数第8个元素（前面均为“object ”）到倒数第1个（最后）截取字符串 
即返回对象的类型
例如：
console.log(foo([]) == 'Array'); //true
*/



//题目5
var a = {}
a.bar = 2

Object.defineProperty(a, "foo",
                      { value: "hi"});// 在a对象上定义foo属性 

console.log(delete a.foo) //false
console.log(delete a.bar) //true

a.foo = "world"
console.log(a.foo) //hi


for (var key in a){
  console.log(key); // 没有输出
}

console.log("foo" in a); //true
console.log("bar" in a); //false
//请问console.log的输出？
/*
当一个属性被设置为不可设置，delete操作将不会有任何效果，并且会返回false。
而Object.defineProperty(obj, prop, descriptor)默认情况下添加的属性值是不可变 且不可枚举
所以foo没有被删除，bar被删除 且for in遍历无输出
*/



//task1
//(1)
function Person(name, age){
    this.name = name;
    this.age = age;
    this.introduce = function(){
        return console.log("I am " + name +", I am " + age + " years old!")
    }
}
var jerry = new Person("Jerry", 2);
jerry.introduce();


//(2)
function Vector(x,y){
    this.x = x;
    this.y = y;
    this.plus = function(otherV){
        return new Vector(this.x + otherV.x, this.y + otherV.y);
    }
    this.minus = function(otherV){
        return new Vector(this.x - otherV.x, this.y - otherV.y);
    }
}
//test
var a = new Vector(3,4);
var b = new Vector(5,6);
console.log(a.plus(b));
console.log(a.minus(b));

