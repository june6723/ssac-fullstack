// switch
let year = 2000;
let month = 2;
let days = 0;

switch (month) {
  case 1: case 3: case 5: case 7: case 8: case 10: case 12:
    days = 31;
    break;
  case 4: case 6: case 9: case 11:
    days = 30;
    break;
  case 2:
    days = ((year % 4 === 0 && year  % 100 !== 0) || (year % 400 === 0)) ? 29 : 28;
    break;
  default:
    console.log('invalid month')
}

// console.log(days)

// Loop
for(let i = 0; i < 10; i++) {
  console.log(i+1)
}

// Lable Statement
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i+j===3) break outer;
    console.log(`inner [${i}, ${j}]`)
  }
}