var myFuncs = require('../lib/printNumber');

//sepNumFromDec tests
describe('sepNumFromDec', function() {
  it('separate the whole number and the decmial point and return them in two indexes in array', function() {
    expect(myFuncs.sepNumFromDec(1.00)).toEqual(['1', '.00']);
  })
})
describe('sepNumFromDec', function() {
  it('separate the whole number and the decmial point and return them in two indexes in array', function() {
    expect(myFuncs.sepNumFromDec(1000.00)).toEqual(['1000', '.00']);
  })
})

//decimal tests
describe('decimal', function() {
  it('should return the decimal number over 100', function() {
    expect(myFuncs.handleDecimal('.04')).toEqual('04/100')
  })
})
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

//createNumArr test
describe('decimal', function() {
  it('should take a number and split it into an array', function() {
    expect(myFuncs.createNumArr(101)).toEqual(['1', '0', '1'])
  })
})



//small number tests
describe('handleSmallSum', function() {
  it('should return the word one when passed the number 1', function() {
    expect(myFuncs.handleSmallSum(1)).toEqual('one');
  })
})
describe('handleSmallSum', function() {
  it('should return the word ten when passed the number 10', function() {
    expect(myFuncs.handleSmallSum(10)).toEqual('ten')
  })
})
describe('handleSmallSum', function() {
  it('should return the word ten when passed the number 10', function() {
    expect(myFuncs.handleSmallSum(50)).toEqual('fifty')
  })
})
describe('handleSmallSum', function() {
  it('should return the word ten when passed the number 10', function() {
    expect(myFuncs.handleSmallSum(65)).toEqual('sixty-five')
  })
})

// small number with decimal
describe('intToEnglish', function() {
  it('should return the word fifteen and 40/100 when passed the number 15.4', function() {
    expect(myFuncs.intToEnglish(12.25)).toEqual('twelve and 25/100')
  })
})
describe('intToEnglish', function() {
  it('should round the number 12.447 to 12.45 and return twelve and 45/100', function() {
    expect(myFuncs.intToEnglish(12.447)).toEqual('twelve and 45/100')
  })
})
describe('intToEnglish', function() {
  it('should return the word fifteen and 40/100 when passed the number 15.4', function() {
    expect(myFuncs.intToEnglish(15.4)).toEqual('fifteen and 40/100')
  })
})
describe('intToEnglish', function() {
  it('should return ten and 04/100 when passed the number 10.04', function() {
    expect(myFuncs.intToEnglish(10.04)).toEqual('ten and 04/100')
  })
})
describe('intToEnglish', function() {
  it('should return ten and 50/100 when passed the number 10.50', function() {
    expect(myFuncs.intToEnglish(10.50)).toEqual('ten and 50/100')
  })
})
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

//handleHundreds tests
describe('handleHundreds', function() {
  it('should return one hundred and 00/100 when passed the number 100.00', function() {
    expect(myFuncs.handleHundreds(100)).toEqual('one hundred')
  })
})
describe('handleHundreds', function() {
  it('should produce a correct result if there is a zero in the tens position', function() {
    expect(myFuncs.handleHundreds(207)).toEqual('two hundred seven')
  })
})
describe('handleHundreds', function() {
  it('should return one hundred twenty-seven and 33/100 when passed the number 127.33', function() {
    expect(myFuncs.handleHundreds(456)).toEqual('four hundred fifty-six')
  })
})

//Numbers < 1000 with decimal
describe('intToEnglish', function() {
  it('should return one hundred twenty-seven and 33/100 when passed the number 127.33', function() {
    expect(myFuncs.intToEnglish(456.00)).toEqual('four hundred fifty-six and 00/100')
  })
})
describe('intToEnglish', function() {
  it('should return one hundred twenty-seven and 33/100 when passed the number 127.33', function() {
    expect(myFuncs.intToEnglish(456.50)).toEqual('four hundred fifty-six and 50/100')
  })
})


//check if groupNum function produces correct result
describe('groupNum', function() {
  it('should split a six digit number into two groups of three in reverse order', function() {
    expect(myFuncs.groupNum(100000)).toEqual(['000', '100'])
  })
})
describe('groupNum', function() {
  it('should split a four digit number into two groups', function() {
    expect(myFuncs.groupNum(1000)).toEqual(['000', '1'])
  })
})
describe('groupNum', function() {
  it('should split a seven digit number into three groups', function() {
    expect(myFuncs.groupNum(1000000)).toEqual(['000', '000', '1'])
  })
})
describe('groupNum', function() {
  it('should split a eight digit number into three groups', function() {
    expect(myFuncs.groupNum(11000000)).toEqual(['000', '000', '11'])
  })
})

//check if evalGroups function produces correct result
describe('evalGroups', function() {
  it('should take a number split it into groups and return the evaluated groups in reverse order', function() {
    expect(myFuncs.evalGroups('111111')).toEqual(['one hundred eleven', 'one hundred eleven'])
  })
})
describe('evalGroups', function() {
  it('should take a number split it into groups and return the evaluated groups in reverse order', function() {
    expect(myFuncs.evalGroups('1111')).toEqual(['one hundred eleven', 'one'])
  })
})
describe('evalGroups', function() {
  it('should take a number split it into groups and return the evaluated groups in reverse order', function() {
    expect(myFuncs.evalGroups('1000')).toEqual(['', 'one'])
  })
})
describe('evalGroups', function() {
  it('should take a number split it into groups and return the evaluated groups in reverse order', function() {
    expect(myFuncs.evalGroups('1001')).toEqual(['one', 'one'])
  })
})

// tests for removeSpaces function
describe('removeSpaces', function() {
  it('should remove empty indexes in array', function() {
    expect(myFuncs.removeSpaces(['one thousand','','ten'])).toEqual(['one thousand', 'ten'])
  })
})
describe('removeSpaces', function() {
  it('should remove empty indexes in array', function() {
    expect(myFuncs.removeSpaces(['one million','',''])).toEqual(['one million'])
  })
})

//handleLargeSum tests
describe('handleLargeSum', function() {
  it('should produce a correct result if n = 1000', function() {
    expect(myFuncs.handleLargeSum(1000)).toEqual('one thousand')
  })
})
describe('handleLargeSum', function() {
  it('should produce a correct result if n = 1001', function() {
    expect(myFuncs.handleLargeSum(1001)).toEqual('one thousand one')
  })
})
describe('handleLargeSum', function() {
  it('should produce a correct result if n = 1000', function() {
    expect(myFuncs.handleLargeSum(1111)).toEqual('one thousand one hundred eleven')
  })
})
describe('handleLargeSum', function() {
  it('should produce a correct result if n = 1000000', function() {
    expect(myFuncs.handleLargeSum(1000000)).toEqual('one million')
  })
})


// bring it all together tests
describe('intToEnglish', function() {
  it('should produce a correct for a large number', function() {
    expect(myFuncs.intToEnglish(1000001242.65)).toEqual('one billion one thousand two hundred forty-two and 65/100')
  })
})
