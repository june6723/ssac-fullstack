// const x = 1;
// function outerFunc() {
//   const x = 10;
//   innerFunc();
// }
// function innerFunc() {
//   console.log(x);
// }
// outerFunc();

// 자바스크립트에서는 함수가 어디에 정의되어있는지가 스코프를 결정한다.
// const x = 1;

// function foo() {
//   const x = 10;
//   bar();
// }

// function bar() {
//   console.log(x);
// }

// foo()
// bar()

const x = 1;
function outer() {
  const x = 10;
  const inner = function () { console.log(x); };
  return inner
}

const innerFunc = outer();
innerFunc();