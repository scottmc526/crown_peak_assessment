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
    var output = ''
    var numArr = num.toString().split('');
    var wholeNumber = numArr.splice(0,2).join('');
    var decimal = numArr.splice(0,3).join('');
    if (!decimal) {
      decimal = '.00'
    }
    if (num <= 10.99) {
      output = this.tenOrLess(wholeNumber) + ' and ' + this.decimal(decimal)
    }
    return output;
  }
}

console.log(myFuncs.intToEnglish(10.05));

module.exports = myFuncs;
