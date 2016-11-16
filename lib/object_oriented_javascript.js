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