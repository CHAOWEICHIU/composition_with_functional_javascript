## **Why Functional JavaScript?**

> Before I tell you **why** you should use it, 
> let's see how you can do math calculation by


> (1) Standard JavaScript


> (2) Object Oriented Javascript


> (3) Functional Javascript(composition)

------------------------------------



> **Standard JavaScript**

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


> **Object Oriented Javascript**


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



> **Functional Javascript(composition)**


```javascript
let double    = num => num * 2
  , triple    = num => num * 3
  , increase1 = num => num + 1
  , decrease1 = num => num - 1
  , compose = (...funcs) => (value) => funcs.reduce((v,fn) => fn(v), value)

let input = 5
  , doMath = compose(increase1, triple, double, decrease1)
  , output = doMath(5)

console.log(output) // return 35
```


## Why and the benefit?


> :thumbsup: Easy To Reason About


```javascript
let double    = num => num * 2
  , triple    = num => num * 3
  , increase1 = num => num + 1
  , decrease1 = num => num - 1

let doMath = compose(increase1, triple, double, decrease1)
console.log(doMath(1)) // 11 = ( 1 + 1 ) * 3 * 2 - 1
```

> :thumbsup: Reusable Small Component

```javascript
let double    = num => num * 2
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

> :thumbsup: Easy To Test

```javascript
const expect = require('chai').expect

let double    = num => num * 2
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


> [NEXT](https://github.com/CHAOWEICHIU/functional_javaScript_composition_2)

## About me

> :fire: Full Stack Web Developer

I am a freelance full-stack web developer, and I get so 
excited whenever there is a chance that I can challenge
myself and become a better software developer.


> :fire: Test Nerd

Few months age, I have exposed to TDD(test-driven development) way
of writing a software. Since then, I have fallen in love with that.
I was inspired by [MPJ](https://www.youtube.com/watch?v=TWBDa5dqrl8)
and [his video](https://www.youtube.com/watch?v=vqAaMVoKz1c)


> :fire: Reusable Code

:heart: Code that can be repeatedly used with little effort

:heart: Code that can be tested easily

:heart: Code that can express themself


------------------------------------------


## Extra Link

> [Custom Real World Functions](https://github.com/CHAOWEICHIU/ccw-custom-functions)

```javascript
decimalPlaces('.05')             // return 2
toTitleCase('hoW aRe yOU')       // return 'How Are You'
truncateString("how are you", 5) // return how a ...
validZipcode('48326')            // return true
// More ...
```

## My Work

### [Food Recipes Application](https://github.com/CHAOWEICHIU/favorite-food-recipe)

>It is an application where has all recipes around the world. You would be able to see what ingredient that you need, what steps that you need to take in order to make the dish.


