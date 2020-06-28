function formatNumber(numberToFormat) {
  return numberToFormat.toLocaleString('pt-br', {minimumFractionDigits: 2});
}

function formatNumberRSPosNeg(value) {

  let formatedNumber = formatNumber(value);

  if (parseInt(value) > 0)
      return "+R$ " + formatedNumber;
  else
      return "-R$" + formatedNumber.replace('-', '');
}

function formatNumberPosNegPercent(value) {

  let formatedNumber = formatNumber(value);

  if (parseInt(value) > 0)
      return formatedNumber + "%";
  else
      return formatedNumber + "%";
}

function formatNumberRS(value) {

  let formatedNumber = formatNumber(value);

  if (parseInt(value) > 0)
      return "R$ " + formatedNumber;
  else
      return "R$ " + formatedNumber;
}

export {formatNumber , formatNumberRSPosNeg, formatNumberPosNegPercent, formatNumberRS};