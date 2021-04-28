
type Currency = 'IDR' | 'USD';

const currencies: { [key: string]: string } = {
  USD: 'en-US',
  IDR: 'id-ID',
};

export const convertCurrency = (value: any, type: Currency = 'IDR'): string => {
  const locale: string = currencies[type] ? currencies[type] : 'id-ID';
  const float = parseFloat(value);

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: type
  }).format(float);
};
