var myFuncs = require('../lib/printNumber');
// tests for basic numbers and format validation
describe('intToEnglish', function() {
  it('should return the word one when passed the number 1', function() {
    var num = 1;
    expect(myFuncs.intToEnglish(num)).toEqual('one and 00/100');
  })
})
describe('intToEnglish', function() {
  it('should return the word ten when passed the number 10', function() {
    var num = 10;
    expect(myFuncs.intToEnglish(num)).toEqual('ten and 00/100')
  })
})

//test to make sure decimal function for decimal under .10 is correct
describe('decimal', function() {
  it('should return the decimal number over 100', function() {
    var decimal = '.04';
    expect(myFuncs.decimal(decimal)).toEqual('04/100')
  })
})

//test to make sure decimal funtion for decimal at or over .10 is correct
describe('decimal', function() {
  it('should return the decimal number over 100', function() {
    var decimal = '.10';
    expect(myFuncs.decimal(decimal)).toEqual('10/100')
  })
})
describe('decimal', function() {
  it('should return the decimal number over 100', function() {
    var decimal = '.11';
    expect(myFuncs.decimal(decimal)).toEqual('11/100')
  })
})

//test to determine if number at or under 10 with decimal under .10 works correctly
describe('intToEnglish', function() {
  it('should return ten and 04/100 when passed the number 10.04', function() {
    var num = 10.04;
    expect(myFuncs.intToEnglish(num)).toEqual('ten and 04/100')
  })
})

//test to determine if number at or under 10 with decimal that has zero at the end;
describe('intToEnglish', function() {
  it('should return ten and 50/100 when passed the number 10.50', function() {
    var num = 10.50;
    expect(myFuncs.intToEnglish(num)).toEqual('ten and 50/100')
  })
})
