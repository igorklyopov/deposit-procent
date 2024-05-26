export function calculateDepositParams() {
  const profitValue = Number(profitInput.value) || 0;
  const sumValue = Number(sumInput.value) || 0;
  const rateValue = Number(rateInput.value) || 0;
  const daysNumberValue = Number(daysNumberInput.value) || 0;
  const yearDaysValue = Number(yearDaysInput.value) || 365;

  console.log(
    'sumValue',
    sumValue,
    'rateValue',
    rateValue,
    'yearDaysValue',
    yearDaysValue,
    'daysNumberValue',
    daysNumberValue,
    'daysNumberInput.value',
    daysNumberInput.value,
    'yearDaysInput.value',
    yearDaysInput.value,
  );

  const profit =
    sumValue * (rateValue / (yearDaysValue * 100)) * daysNumberValue;

  // if (!profitValue) {
  profitInput.value = profit.toFixed(2);
  // }
}
