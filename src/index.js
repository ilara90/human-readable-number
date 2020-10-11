module.exports = function toReadable (number) {
  var A1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  var A2 = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  var A3 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  var b = number%10;
  var a = (number-b)/10;
  var c = number%100;
  var d = (number-c)/100;
  var e = (c-b)/10;
  if (number === 0) return "zero";
  if (number < 10) return A1[number-1];
  if (number > 10 && number < 20) return A2[number-11];
  if (b == 0 && c == 0 && number < 100) return A3[a-1];
  if (b == 0 && d == 0) return A3[a-1];
  if (number > 20 && number < 100) return A3[a-1]+' '+A1[b-1];
  if (c == 0) return A1[d-1]+' hundred';
  if (number > 100 && number < 1000 && c > 10 && c < 20) return A1[d-1]+' hundred'+ ' '+ A2[b-1];
  if (number > 100 && number < 1000 && e == 0) return A1[d-1]+' hundred'+ ' '+A1[b-1];
  if (number > 100 && number < 1000 && b == 0) return A1[d-1]+' hundred'+ ' '+ A3[c/10-1];
  if (number > 100 && number < 1000 && b !== 0) return A1[d-1]+' hundred'+ ' '+ A3[e-1]+' '+A1[b-1];
}
