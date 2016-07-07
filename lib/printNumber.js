var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']

var myFuncs = {
  decimal: function(dec) {
    dec = dec.toString();
    var decArr = dec.split('')
    var decAsFraction = decArr.splice(1,2).join('')
    return decAsFraction + '/100'
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
    if (num <= 10.99) {
      output = this.tenOrLess(wholeNumber) + ' and ' + this.decimal(decimal)
    }
    return output;
  }
}
module.exports = myFuncs;

// console.log(myFuncs.intToEnglish(10.11));
