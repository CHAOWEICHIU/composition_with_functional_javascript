let double = num => num * 2
  , triple = num => num * 3
  , increase1 = num => num + 1
  , decrease1 = num => num - 1
  , compose = (...funcs) => (value) => funcs.reduce((v,fn) => fn(v), value)

// let input = 5
//   , doMath = compose(increase1, triple, double, decrease1)
//   , output = doMath(5)

// console.log(output)


let doMath = compose(triple, triple, double, decrease1)
console.log(doMath(1)) // 11 = ( 1 + 1 ) * 3 * 2 - 1