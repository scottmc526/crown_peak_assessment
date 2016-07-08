var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

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
    return tens[numArr[0]] + '-' + ones[numArr[1]]
  },
  intToEnglish: function(num) {
    var dollars = '';
    var nds = this.sepNumFromDec(num); // nds = number and decimal separated
    var cents = this.handleDecimal(nds[1]);
    if (num <= 19.99) {
      dollars = this.underTwenty(nds[0])
    } else if (num > 19.99 && num <= 99.99) {
      dollars = this.underOneHundred(nds[0])
    }
    return dollars + ' and ' + cents
  }
}
module.exports = myFuncs;

console.log(myFuncs.intToEnglish(65.13));
