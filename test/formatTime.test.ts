import { formatTime } from '../src/formatTime';

describe('time formatter', () => {
  it('transform date format to time', () => {
    expect(formatTime(new Date('2021-01-11 8:00')))
      .toBe('8:00 AM');
  });
});