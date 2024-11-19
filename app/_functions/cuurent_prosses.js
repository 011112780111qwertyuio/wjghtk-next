export const CuurentProsses = (amount, countryCode, currencyCode) => {
  const formatter = new Intl.NumberFormat(countryCode, {
    style: 'currency',
    currency: currencyCode,
  });
  return formatter.format(amount);


  
}