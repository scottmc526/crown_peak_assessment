var myFuncs = require('../lib/printNumber');

describe('intToEnglish', function() {
  it('should return the word one when passed the number 1', function() {
    var num = 1;
    expect(myFuncs.intToEnglish(num)).toEqual('one');
  })
})

describe('intToEnglish', function() {
  it('should return the word ten when passed the number 10', function() {
    var num = 10;
    expect(myFuncs.intToEnglish(num)).toEqual('ten')
  })
})
