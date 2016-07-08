var myFuncs = require('../lib/printNumber');
// tests for basic numbers and format validation
describe('intToEnglish', function() {
  it('should return the word one when passed the number 1', function() {
    expect(myFuncs.intToEnglish(1)).toEqual('one and 00/100');
  })
})
describe('intToEnglish', function() {
  it('should return the word ten when passed the number 10', function() {
    expect(myFuncs.intToEnglish(10)).toEqual('ten and 00/100')
  })
})
describe('intToEnglish', function() {
  it('should return the word fifteen and 40/100 when passed the number 15.4', function() {
    expect(myFuncs.intToEnglish(15.4)).toEqual('fifteen and 40/100')
  })
})
describe('intToEnglish', function() {
  it('should round the number 12.447 to 12.45 and return twelve and 45/100', function() {
    expect(myFuncs.intToEnglish(12.447)).toEqual('twelve and 45/100')
  })
})

//test to determine if decimal function for decimal under .10 is correct
describe('decimal', function() {
  it('should return the decimal number over 100', function() {
    expect(myFuncs.handleDecimal('.04')).toEqual('04/100')
  })
})

//tests determine if decimal funtion for decimal at or over .10 is correct
describe('decimal', function() {
  it('should return the decimal number over 100', function() {
    expect(myFuncs.handleDecimal('.10')).toEqual('10/100')
  })
})
describe('decimal', function() {
  it('should return the decimal number over 100', function() {
    expect(myFuncs.handleDecimal('.11')).toEqual('11/100')
  })
})

//test to determine if number under 20 with decimal that doesn't end in 0 is correct
describe('intToEnglish', function() {
  it('should return ten and 04/100 when passed the number 10.04', function() {
    expect(myFuncs.intToEnglish(10.04)).toEqual('ten and 04/100')
  })
})

//test to determine if number under 20 with decimal that ends with 0 is correct
describe('intToEnglish', function() {
  it('should return ten and 50/100 when passed the number 10.50', function() {
    expect(myFuncs.intToEnglish(10.50)).toEqual('ten and 50/100')
  })
})
//n > 19.99 && < 100
describe('intToEnglish', function() {
  it('should return a the correct string when passed 20.00', function() {
    expect(myFuncs.intToEnglish(20.00)).toEqual('twenty and 00/100')
  })
})
describe('intToEnglish', function() {
  it('should return sixty-five and 33/100 when passed the number 65.33', function() {
    expect(myFuncs.intToEnglish(65.33)).toEqual('sixty-five and 33/100')
  })
})

// n === 100
describe('intToEnglish', function() {
  it('should return 65 and 33/100 when passed the number 65.33', function() {
    expect(myFuncs.intToEnglish(100.00)).toEqual('one hundred and 00/100')
  })
})
