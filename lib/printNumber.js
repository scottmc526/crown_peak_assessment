var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

var myFuncs = {
  decimal: function(dec) {
    //convert to string, split into array, spice off decimal point, join back together
    var decToNum = dec.toString().split('').splice(1,2).join('')
    return decToNum + '/100'
  },
  tenOrLess: function(num) {
    return ones[num];
  },
  intToEnglish: function(num) {
    //cnf = correct number format
    var cnf = num.toFixed(2);
    var output = ''
    var numArr = cnf.toString().split('');
    var wholeNumber = numArr.splice(0, numArr.length - 3 ).join('');
    var decimal = numArr.splice(0,3).join('');
    var cents = this.decimal(decimal);
    console.log('number: '+ wholeNumber + ' Decimal: '+ decimal);
    if (num <= 10.99) {
      output = this.tenOrLess(wholeNumber) + ' and ' + cents
    }
    return output;
  }
}
module.exports = myFuncs;

console.log(myFuncs.intToEnglish(5));
