export const currencyToNumber = (currency) => {
    return parseFloat(currency.replace(/[$,]/g, ''));
};
