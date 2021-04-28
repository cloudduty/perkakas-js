import { format } from 'date-fns';

export const formatTime = (date: Date): string => {
  return format(date, 'p');
}