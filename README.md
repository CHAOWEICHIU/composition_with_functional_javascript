## **Why Functional JavaScript?**

> Before I tell you **why** you should use it, let's see how you can do math calculation by using javascript different way
> Standard JavaScript
> Object Oriented Javascript
Functional Javascript(composition)

------------------------------------



> Standard JavaScript

```javascript 
let double    = num => num * 2
  , triple    = num => num * 3
  , increase1 = num => num + 1
  , decrease1 = num => num - 1

let input = 5; 

let step1  = increase1( input ) //   5 + 1 =  6
  , step2  =    triple( step1 ) //   6 * 3 = 18
  , step3  =    double( step2 ) //  18 * 2 = 36
  , output = decrease1( step3 ) //  36 - 1 = 35

console.log(output) // 35
```


> Object Oriented Javascript


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



> Functional Javascript(composition)


```javascript
let double 	  = num => num * 2
  , triple    = num => num * 3
  , increase1 = num => num + 1
  , decrease1 = num => num - 1
  , compose = (...funcs) => (value) => funcs.reduce((v,fn) => fn(v), value)

let input = 5
  , doMath = compose(increase1, triple, double, decrease1)
  , output = doMath(5)

console.log(output) // return 35
```


## Why?

If you are planning to make a rebust application that is relatively easier to scale, Functional Javascript is a way to do.

> :thumbsup: Easy to reason about


```javascript
let double 	  = num => num * 2
  , triple    = num => num * 3
  , increase1 = num => num + 1
  , decrease1 = num => num - 1

let doMath = compose(increase1, triple, double, decrease1)
console.log(doMath(1)) // 11 = ( 1 + 1 ) * 3 * 2 - 1
```

> :thumbsup: reusable component

```javascript
let double 	  = num => num * 2
  , triple    = num => num * 3
  , increase1 = num => num + 1
  , decrease1 = num => num - 1

let doMath = compose(triple, triple, double, decrease1)
console.log(doMath(1)) // 17 = 1 * 3 * 3 * 2 - 1
// Calculate number 1 
// (1) triple
// (2) triple
// (3) double
// (4) decrease 1
```

> :thumbsup: easy to test

```javascript
const expect = require('chai').expect

let double 	  = num => num * 2
  , triple    = num => num * 3
  , increase1 = num => num + 1
  , decrease1 = num => num - 1

describe('pure functions test', ()=>{
	it('should double', ()=>{
		expect(double(2)).to.equal(4)
	})
	it('should triple', ()=>{
		expect(triple(2)).to.equal(6)
	})
	it('should increase1', ()=>{
		expect(increase1(2)).to.equal(3)
	})
	it('should decrease1', ()=>{
		expect(decrease1(2)).to.equal(1)
	})
})

// easy to write test
```
