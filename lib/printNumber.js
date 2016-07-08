var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

var myFuncs = {
  decimal: function(dec) {
    //convert to string, split into array, spice off decimal point, join back together
    var decToNum = dec.toString().split('').splice(1,2).join('')
    return decToNum + '/100'
  },
  underTwenty: function(num) {
    return ones[num];
  },
  intToEnglish: function(num) {
    //cnf = correct number format
    var cnf = num.toFixed(2);
    var output = ''
    var numArr = cnf.toString().split('');
    //splice off everything to the left of decimal point
    var wholeNumber = numArr.splice(0, numArr.length - 3 ).join('');
    //decimal point and decimal numbers are all thats left in numArr
    var decimal = numArr.join('');
    var cents = this.decimal(decimal);
    if (num <= 19.99) {
      output = this.underTwenty(wholeNumber) + ' and ' + cents
    }
    return output;
  }
}
module.exports = myFuncs;

console.log(myFuncs.intToEnglish(15.13));
