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
  form: document.getElementById('form'),
};

refs.form.addEventListener('change', onFormChange);

function onFormChange(e) {
  switch (e.target.name) {
    case 'dateFrom':
      console.log('onFormChange', e.target.value);
      break;

    case 'dateTo':
      console.log('onFormChange', e.target.value);
      break;

    default:
      break;
  }
}

function calculate() {
  const [profitInput, sumInput, rateInput, daysNumberInput, yearDaysInput] =
    refs.form;

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

refs.form.calculateButton.addEventListener('click', onCalculateButtonClick);

// calculate();

console.dir(refs.form);
