export function renderState(state) {
    const div = document.createElement('div');
    div.classList.add('state');

    const h1 = document.createElement('h1');
    h1.textContent = state.name;

    const p = document.createElement('p');
    p.textContent = `At ~${state.elevation}, located in ${state.location}. With ${state.atttractions}, there is so much to do! Price is $${state.price}+.`;

    div.append(h1.p);
    return div;
}

