import { refs } from '../refs.js';
import { state } from '../state.js';
import { getTime } from '../utils/getTime.js';
import { clearInput } from '../utils/clearInput.js';
import { isCorrectInputDate } from '../isCorrectInputDate.js';

const [
  profitInput,
  sumInput,
  rateInput,
  daysNumberInput,
  dateFromInput,
  dateToInput,
  yearDaysInput,
] = refs.depositForm;

export function onDepositFormChange(e) {
  switch (e.target.name) {
    case 'dateFromInput':
      state.depositTerm.dateFrom = getTime(e.target.value);

      if (daysNumberInput.value !== '') clearInput(daysNumberInput);
      if (isCorrectInputDate()) {
        daysNumberInput.value = getDepositTerm();
      } else {
        clearInput(daysNumberInput);
      }
      break;

    case 'dateToInput':
      state.depositTerm.dateTo = getTime(e.target.value);
      console.log(
        'dateFrom',
        state.depositTerm.dateFrom,
        'dateTo',
        state.depositTerm.dateTo,
      );
      if (daysNumberInput.value !== '') clearInput(daysNumberInput);
      if (isCorrectInputDate()) {
        daysNumberInput.value = getDepositTerm();
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
