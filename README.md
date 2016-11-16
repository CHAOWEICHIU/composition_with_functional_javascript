## Functional composition in JavaScript

## Demo

> Standard JavaScript

```javascript 
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
```

-------------------------------------------------------


> OOP Javascript 


```javascript 
let NumberBuilder = function(input) {
  let num = input;
  return {
      double: function(){
        num = num * 2
        return this
      },
      triple: function(){
        num = num * 3
        return this
      },
      increase1: function(){
      	num = num + 1
      	return this
      },
      decrease1: function(){
      	num = num - 1
      	return this
      },
      build: function(){
      	return num
      }
  }
}
let input = 5
  , numberBuilder = new NumberBuilder(5)
  , result = numberBuilder
				.increase1()  //  5 + 1 =  6
				.triple()     //  6 * 3 = 18
				.double()     // 18 * 2 = 36
				.decrease1()  // 36 - 1 = 35
				.build()      // return 35

console.log(result) // 35
```

-------------------------------------------------------


> Functional Javascript(composition)


```javascript
let double = num => num * 2
  , triple = num => num * 3
  , increase1 = num => num + 1
  , decrease1 = num => num - 1
  , compose = (...funcs) => (value) => funcs.reduce((v,fn) => fn(v), value)

let input = 5
  , doMath = compose(increase1, triple, double, decrease1)
  , output = doMath(5)

console.log(output)
```


