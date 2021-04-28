import { formatDate } from '../src/formatDate';

describe('date formatter', () => {
  it('transform date format', () => {
    expect(formatDate(new Date('2021-01-11')))
      .toBe('Jan 11, 2021');
  });
});