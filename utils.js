export function renderState(state) {
    const div = document.createElement('div');
    div.classList.add('state');

    const h1 = document.createElement('h1');
    h1.textContent = state.name;

    const p = document.createElement('p');
    p.textContent = `At ~${state.elevation} elevation, located in ${state.location}.`;

    const p2 = document.createElement('p2');
    p2.textContent = `With ${state.attraction}, there is so much to do!`;

    const p3 = document.createElement('p3');
    p3.textContent = ` Price is $${state.price}+.`;

    div.append(h1, p, p2, p3);
    return div;
}

