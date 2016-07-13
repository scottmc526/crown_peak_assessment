var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
var hundred = 'hundred'
var bigSuffixes = [ '', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion']

var myFuncs = {
  sepNumFromDec: function(num) {
    var cnf = num.toFixed(2); //cnf = correct number format
    var arr = this.createNumArr(cnf)
    //splice off everything to the left of decimal point
    var wholeNumber = arr.splice(0, arr.length - 3).join('');
    //decimal point and decimal numbers are all thats left in numArr
    var decimal = arr.join('');
    return [wholeNumber, decimal]
  },
  createNumArr: function (n) {
    return n.toString().split('')
  },
  handleDecimal: function(dec) {
    //convert to string, split into array, splice off decimal point, join back together
    var decToFraction = dec.toString().split('').splice(1,2).join('') + '/100';
    return decToFraction;
  },
  underTwenty: function(n) {
    return ones[n];
  },
  underOneHundred: function(n) {
    var arr = this.createNumArr(n)
    var nearestTen = Math.floor(Math.round(n/10) * 10);
    return Number(n) === nearestTen ? tens[arr[0]] : tens[arr[0]] + '-' + ones[arr[1]];
  },
  underOneThousand: function(n) {
    var output = '';
    var lastTwo;
    var arr = this.createNumArr(n);
    arr[1] === '0' ? lastTwo = arr[2] : lastTwo = arr.splice(1, 2).join('');
    output += ones[arr[0]] + ' ' + hundred;
    if (lastTwo > 19) {
      output += ' ' + this.underOneHundred(lastTwo)
    } else if (lastTwo < 20 && lastTwo > 0) {
      output += ' ' + this.underTwenty(lastTwo)
    }
    return output
  },
  groupNum : function(n) {
    var arr = this.createNumArr(n), arrays = [], size = 3
    while (arr.length > 2) {
      arrays.push(arr.splice(arr.length-3, size).join(''));
    }
    if (arr.length > 0) {
      arrays.push(arr.join(''))
    }
    return arrays
  },
  evalGroups: function(n) {
    var arr = [], arrays = this.groupNum(n);
    for (var i = 0; i < arrays.length; i++) {
      if (arrays[i].charAt(0) === '0') {
        var newNum = arrays[i].slice(1);
        if (newNum < 20) {
          output = this.underTwenty(newNum);
          arr.push(output)
        } else {
          output = this.underOneHundred(newNum)
          arr.push(output)
        }
      } else if (arrays[i] > 99) {
        output = this.underOneThousand(arrays[i])
        arr.push(output)
      } else if (arrays[i] > 19) {
        output = this.underOneHundred(arrays[i])
        arr.push(output)
      } else {
        output = this.underTwenty(arrays[i])
        arr.push(output)
      }
    }
    return arr

  },
  handleLargeSum: function(n) {
    var evaluatedArr = this.evalGroups(n)
    for (var i = evaluatedArr.length -1; i >= 0; i--) {
      if (i === 0) {
        evaluatedArr[i] += '';
      } else {
        evaluatedArr[i] += ' '+ bigSuffixes[i]
      }
    }
    evaluatedArr = evaluatedArr.reverse().join(' ')
    return evaluatedArr
  },
  intToEnglish: function(num) {
    var dollars = '';
    var nds = this.sepNumFromDec(num); // nds = number and decimal separated
    var cents = this.handleDecimal(nds[1]);
    if (num < 0) {
      return 'Invalid amount'
    } else if (num <= 19.99) {
      dollars = this.underTwenty(nds[0])
    } else if (num > 19.99 && num <= 99.99) {
      dollars = this.underOneHundred(nds[0])
    } else if (num > 99.99 && num <= 999.99) {
      dollars = this.underOneThousand(nds[0])
    } else  {
      dollars = this.handleLargeSum(nds[0])
    }
    return dollars + ' and ' + cents
  }
}
module.exports = myFuncs;

console.log(myFuncs.intToEnglish(111112022333444.33));
