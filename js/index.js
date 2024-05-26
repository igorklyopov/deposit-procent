import { refs } from './refs.js';
import { onDepositFormChange } from './handlers/onDepositFormChange.js';
import { onDepositFormClick } from './handlers/onDepositFormClick.js';



refs.depositForm.addEventListener('change', onDepositFormChange);
refs.depositForm.addEventListener('click', onDepositFormClick);

console.dir(refs.depositForm);
