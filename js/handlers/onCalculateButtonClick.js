import { calculateDepositParams } from '../calculateDepositParams.js';

export function onCalculateButtonClick(e) {
  e.preventDefault();
  calculateDepositParams();
}
