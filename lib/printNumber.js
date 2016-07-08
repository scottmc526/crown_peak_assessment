var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

var bigSuffixes = ['', '', '', 'hundred', 'thousand', 'million', 'billion', 'trillion', 'quintillion']

var myFuncs = {
  sepNumFromDec: function(num) {
    var cnf = num.toFixed(2); //cnf = correct number format
    var numArr = cnf.toString().split('');
    //splice off everything to the left of decimal point
    var wholeNumber = numArr.splice(0, numArr.length - 3).join('');
    //decimal point and decimal numbers are all thats left in numArr
    var decimal = numArr.join('');
    return [wholeNumber, decimal]
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
    var numArr = n.toString().split('');
    var nearestTen = Math.floor(Math.round(n/10) * 10);
    return Number(n) === nearestTen ? tens[numArr[0]] : tens[numArr[0]] + '-' + ones[numArr[1]];
  },
  underOneThousand: function(n) {
    var output = '';
    var numArr = n.toString().split('');
    var lastTwo = numArr.splice(1, 2).join('');
    output += ones[numArr[0]] + ' ' + bigSuffixes[3];
    if (lastTwo > 19) {
      output += ' ' + this.underOneHundred(lastTwo)
    } else if (lastTwo < 20 && lastTwo > 0) {
      output += ' ' + this.underTwenty(lastTwo)
    }
    return output
  },
  overOneHundred: function(n) {
    var output = ''
    var numArr = n.toString().split('')
    var lastDigit = Number(numArr[numArr.length - 1])
    var nearestTen = 0;
    for (var i = numArr.length; i > 1; i --) {
      var denominator = Math.pow(10, i)
      nearestTen = Math.floor(Math.round(n/denominator) * denominator);
      n -= nearestTen
      newNumArr = n.toString().split('');
      if (n > 100) {
        output += ones[newNumArr[0]] + ' ' + bigSuffixes[[newNumArr.length]] + ' '
      } else if (n < 100 && n > 19 ){
        output += this.underOneHundred(n)
      } else {
        output += this.underTwenty(n)
      }
      console.log(output);
    }

  },
  intToEnglish: function(num) {
    var dollars = '';
    var nds = this.sepNumFromDec(num); // nds = number and decimal separated
    var cents = this.handleDecimal(nds[1]);
    if (num <= 19.99) {
      dollars = this.underTwenty(nds[0])
    } else if (num > 19.99 && num <= 99.99) {
      dollars = this.underOneHundred(nds[0])
    } else if (num > 99.99 && num <= 999.99) {
      dollars = this.underOneThousand(nds[0])
    }
    return dollars + ' and ' + cents
  }
}
module.exports = myFuncs;

console.log(myFuncs.intToEnglish(953.50));
