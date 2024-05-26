import {onCalculateButtonClick} from './onCalculateButtonClick.js'

export function onDepositFormClick(e) {
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