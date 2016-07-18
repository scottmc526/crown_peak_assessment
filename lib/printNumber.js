var words = require('./numWords.js')
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
  handleSmallSum: function(n) {
    var arr = this.createNumArr(n), nearestTen;
    if (n < 20) {
      return words.ones[n];
    } else if (n >= 20) {
      nearestTen = Math.floor(Math.round(n/10) * 10);
      return Number(n) === nearestTen ? words.tens[arr[0]] : words.tens[arr[0]] + '-' + words.ones[arr[1]];
    }
  },
  handleHundreds: function(n) {
    var output = '', arr = this.createNumArr(n), lastTwo;

    arr[1] === '0' ? lastTwo = arr[2] : lastTwo = arr.splice(1, 2).join('');
    output += words.ones[arr[0]] + ' ' + words.hundred;
    if (Number(lastTwo) > 0) {
      output += ' ' + this.handleSmallSum(lastTwo)
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
    var arr = [], arrays = this.groupNum(n), newNum;
    for (var i = 0; i < arrays.length; i++) {
      if (arrays[i].charAt(0) === '0' && arrays[i].charAt(1) === '0' && arrays[i].charAt(2) === '0') {
        output = ''
        arr.push(output)
      } else if (arrays[i].charAt(0) === '0' && arrays[i].charAt(1) === '0') {
        newNum = arrays[i].slice(2)
        output = this.handleSmallSum(newNum)
        arr.push(output)
      } else if (arrays[i].charAt(0) === '0' && arrays[i].charAt(1) !== '0') {
        newNum = arrays[i].slice(1);
        output = this.handleSmallSum(newNum);
        arr.push(output)
      } else if (arrays[i] > 99) {
        output = this.handleHundreds(arrays[i])
        arr.push(output)
      } else {
        output = this.handleSmallSum(arrays[i])
        arr.push(output)
      }
    }
    return arr
  },
  removeSpaces: function(arr) {
    var correctedArr = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] !== '') {
        correctedArr.push(arr[i])
      }
    }
    return correctedArr;
  },
  handleLargeSum: function(n) {
    var evaluatedArr = this.evalGroups(n)
    var numToPrint;
    for (var i = evaluatedArr.length -1; i >= 0; i--) {
      if (evaluatedArr[i] === '') {
        evaluatedArr[i] += ''
      } else if (i === 0) {
        evaluatedArr[i] += '';
      } else {
        evaluatedArr[i] += ' ' + words.bigSuffixes[i]
      }
    }
    numToPrint = this.removeSpaces(evaluatedArr).reverse().join(' ')
    return numToPrint
  },
  intToEnglish: function(num) {
    var dollars = '';
    var nds = this.sepNumFromDec(num); // nds = number and decimal separated
    var cents = this.handleDecimal(nds[1]);
    if (num < 0 || num >= Math.pow(10, 18)) {
      return 'Invalid amount'
    } else if (num <= 99.99) {
      dollars = this.handleSmallSum(nds[0])
    } else if (num > 99.99 && num <= 999.99) {
      dollars = this.handleHundreds(nds[0])
    } else  {
      dollars = this.handleLargeSum(nds[0])
    }
    return dollars + ' and ' + cents
  }
}
module.exports = myFuncs;

console.log(myFuncs.intToEnglish(10000.00));
