
  // get user input

import { getState, renderState } from './fetch-utils';

  // use user input to update state
//const stateDetailContainer = document.getElementById('state-detail-container');
const stateEl = document.getElementById('states');
  // update DOM to reflect the new state

async function loadData() {
    const states = await getState();

    for (let state of states) {
        const statediv = renderState(state);
        stateEl.append(statediv);
    }
}
loadData();