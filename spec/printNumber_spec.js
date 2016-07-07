var myFuncs = require('../lib/printNumber');
// tests for basic numbers
describe('intToEnglish', function() {
  xit('should return the word one when passed the number 1', function() {
    var num = 1;
    expect(myFuncs.intToEnglish(num)).toEqual('one');
  })
})

describe('intToEnglish', function() {
  xit('should return the word ten when passed the number 10', function() {
    var num = 10;
    expect(myFuncs.intToEnglish(num)).toEqual('ten')
  })
})
//test to make sure decimal function is correct
describe('decimal', function() {
  it('should return the decimal number over 100', function() {
    var decimal = '.04';
    expect(myFuncs.decimal(decimal)).toEqual('04/100')
  })
})
//test to determine if number with decimals produces correct result
describe('intToEnglish', function() {
  it('should return ten and 04/100 when passed the number 10.04', function() {
    var num = 10.04;
    expect(myFuncs.intToEnglish(num)).toEqual('ten and 04/100')
  })
})
