var ones = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']


module.exports = {
  tenOrLess: function(num) {
    return ones[num];
  },
  intToEnglish: function(num) {
    if (num <= 10) {
      return this.tenOrLess(num);
    }
  }
}
