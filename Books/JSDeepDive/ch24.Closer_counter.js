
// const { increase, decrease } = function () {
//   let num = 0;

//   // 클로저인 메서드를 갖는 객체를 반환
//   // 객체 리터럴은 스코프를 만들지 않는다.
//   // 따라서 아래 메서드들의 상위 스코프는 즉시 실행 함수의 렉시컬 환경이다.
//   return {
//     increase() {
//       return ++num;
//     },
//     decrease() {
//       return --num;
//     }
//   }
// } ()



// 생성자 함수 Version
// const Counter = (function () {
//   let num = 0;

//   function Counter() {
//     // this.num = 0; // 프로퍼티는 public하므로 은닉되지 않는다.
//   }

//   Counter.prototype.increase = function() {
//     return ++num;
//   };

//   Counter.prototype.decrease = function() {
//     return num > 0 ? --num : 0;
//   };
//   return Counter;
// } ());
// const counter = new Counter()
// console.log(counter.increase())
// console.log(counter.increase())
// console.log(counter.increase())
// console.log(counter.increase())
// console.log(counter.increase())
// console.log(counter.decrease())



// 함수를 인수로 전달받고 함수를 반환하는 고차 함수
// function makeCounter(predicate) {
//   let counter = 0;

//   return function() {
//     counter = predicate(counter)
//     return counter
//   }
// }

// // 보조 함수 
// function increase(n) {
//   return ++n;
// }

// function decrease(n) {
//   return --n;
// }

// // 함수로 함수를 생성한다.
// const increaser = makeCounter(increase);
// console.log(increaser())
// console.log(increaser())
// // 참조하는 Lexical environment가 다르기 때문에 연동되지 않는다
// const decreaser = makeCounter(decrease);
// console.log(decreaser())
// console.log(decreaser())



const counter = (function () {
  let num = 0;
  return function(predicate) {
    num = predicate(num)
    return num
  }
} ())
function increase(n) {
    return ++n;
}
  
function decrease(n) {
  return --n;
}
console.log(counter(increase))
console.log(counter(increase))
console.log(counter(increase))
console.log(counter(decrease))
console.log(counter(decrease))
console.log(counter(decrease))

function Person(name, age) {
  this.name = name;
  let _age = age;

  
}
Person.prototype.sayHi = function () {
  console.log(`Hi! My name is ${this.name}. I am ${_age}`);
}
const me = new Person('Lee', 20)
me.sayHi()
console.log(me.name)
console.log(me._age)
const you = new Person('kim', 29)
you.sayHi()
console.log(you.name)
console.log(you._age)

