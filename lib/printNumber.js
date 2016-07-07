var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']


module.exports = {
  decimal: function(dec) {
    console.log(dec);
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
    var numStr = num.toString();
    var numArr = numStr.split('')
    var wholeNumber = numArr.splice(0,2).join('');
    var decimal = numArr.splice(0,3).join('');

    if (num <= 10.99) {
      output = this.tenOrLess(wholeNumber) + ' and '+ this.decimal(decimal);
    }
    return output;
  }
}
