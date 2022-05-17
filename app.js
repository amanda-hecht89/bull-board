
  // get user input
import { getState } from './fetch-utils.js';
import { renderState } from './utils.js';
  // use user input to update state 
const coloradoEl = document.getElementById('colorado');
//const stateDetailContainer = document.getElementById('state-detail-container');

  // update DOM to reflect the new state

async function loadData() {
    const states = await getState();
    for (let state of states) {
        const statediv = renderState(state);
        coloradoEl.append(statediv);
    }
}
loadData();