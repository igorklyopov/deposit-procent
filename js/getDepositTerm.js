export const getDepositTerm = () => {
  // срок вклада в днях за вычетом первого и последнего дня
  return getDaysNumber(dateTo - dateFrom) - 2;
};