import { convertCurrency } from '../src/convertCurrency';

describe('convert currency', () => {
  it('validate currency string value', () => {
    expect(convertCurrency('123455666', 'IDR'))
      .toEqual("Rp 123.455.666,00");
  });

  it('validate currency number value', () => {
    expect(convertCurrency(123455666, 'IDR'))
      .toEqual("Rp 123.455.666,00");
  });
});
