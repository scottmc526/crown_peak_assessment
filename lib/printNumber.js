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
  intToEnglish: function(num) {
    var dollars = '';
    //sepNumFromDec returns array that contains the integer and the decimal as two separate indexes
    var separation = this.sepNumFromDec(num);
    var cents = this.handleDecimal(separation[1]);
    if (num <= 19.99) {
      dollars = this.underTwenty(separation[0])
    }
    return dollars + ' and ' + cents
  }
}
module.exports = myFuncs;

console.log(myFuncs.intToEnglish(15.13));
