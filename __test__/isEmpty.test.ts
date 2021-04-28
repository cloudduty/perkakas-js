import { isEmpty } from '../src/isEmpty';

describe('is empty ', () => {
  it('validate if the value empty object', () => {
    expect(isEmpty({}))
      .toBe(true);
  });

  it('validate if the value is null', () => {
    expect(isEmpty(null))
      .toBe(true);
  });

  it('validate if the value is 0', () => {
    expect(isEmpty(0))
      .toBe(true);
  });

  it('validate if the value is empty string', () => {
    expect(isEmpty(''))
      .toBe(true);
  });

  it('validate if the value is empty array', () => {
    expect(isEmpty([]))
      .toBe(true);
  });

  it('validate if the value is undefined', () => {
    expect(isEmpty(undefined))
      .toBe(true);
  });
});