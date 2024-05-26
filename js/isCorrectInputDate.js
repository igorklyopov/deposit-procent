import { state } from './state.js';

const { dateFrom, dateTo } = state.depositTerm;

export const isCorrectInputDate = () =>
  dateTo > dateFrom && getDaysNumber(dateTo - dateFrom) > 2 && dateFrom !== 0;
