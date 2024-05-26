/**
 * p = s*(r/k*100)*t
 *
 * p - размер начисленного дохода по вкладу
 * s - сумма вклада
 * r - депозитная ставка, годовых
 * t - срок вклада в днях за вычетом первого и последнего дня
 * k - количество дней в году
 */

const refs = {
  depositForm: document.getElementById('depositForm'),
};
const [
  profitInput,
  sumInput,
  rateInput,
  daysNumberInput,
  dateFromInput,
  dateToInput,
  yearDaysInput,
] = refs.depositForm;

refs.depositForm.addEventListener('change', onDepositFormChange);
refs.depositForm.addEventListener('click', onDepositFormClick);
let dateFrom = 0,
  dateTo = 0;

const getTime = (time = '') => {
  return new Date(time).getTime();
};

const getDaysNumber = (time = 0) => {
  return Math.floor(time / (1000 * 60 * 60 * 24));
};

const getTerm = () => {
  // срок вклада в днях за вычетом первого и последнего дня
  return getDaysNumber(dateTo - dateFrom) - 2;
};

const clearInput = inputRef => {
  inputRef.value = '';
};

const isCorrectInputDate = () =>
  dateTo > dateFrom && getDaysNumber(dateTo - dateFrom) > 2 && dateFrom !== 0;

function onDepositFormChange(e) {
  switch (e.target.name) {
    case 'dateFromInput':
      dateFrom = getTime(e.target.value);

      if (daysNumberInput.value !== '') clearInput(daysNumberInput);
      if (isCorrectInputDate()) {
        daysNumberInput.value = getTerm();
      } else {
        clearInput(daysNumberInput);
      }
      break;

    case 'dateToInput':
      dateTo = getTime(e.target.value);
      console.log('dateFrom', dateFrom, 'dateTo', dateTo);
      if (daysNumberInput.value !== '') clearInput(daysNumberInput);
      if (isCorrectInputDate()) {
        daysNumberInput.value = getTerm();
      } else {
        clearInput(daysNumberInput);
      }
      break;

    case 'daysNumberInput':
      clearInput(dateFromInput);
      clearInput(dateToInput);
      break;

    default:
      break;
  }
}

function onDepositFormClick(e) {
  switch (e.target.id) {
    case 'resetButton':
      (dateFrom = 0), (dateTo = 0);
      break;

    case 'calculateButton':
      onCalculateButtonClick(e);
      break;

    default:
      break;
  }
}

function calculate() {
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

function onCalculateButtonClick(e) {
  e.preventDefault();
  calculate();
}

console.dir(refs.depositForm);
