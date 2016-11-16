let double = num => num * 2
  , triple = num => num * 3
  , increase1 = num => num + 1
  , decrease1 = num => num - 1

let input = 5; 

let step1  = increase1( input ) //   5 + 1 =  6
  , step2  =    triple( step1 ) //   6 * 3 = 18
  , step3  =    double( step2 ) //  18 * 2 = 36
  , output = decrease1( step3 ) //  36 - 1 = 35

console.log(output) // 35