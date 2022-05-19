
  // get user input

import { fetchPosts } from './fetch-utils.js';

  // use user input to update state
//const stateDetailContainer = document.getElementById('state-detail-container');
const stateEl = document.getElementById('states');
  // update DOM to reflect the new state
loadData();

async function loadData() {
    const posts = await fetchPosts();

    for (let post of posts) {
        const div = document.createElement('div');
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const p2 = document.createElement('p2');
        h1.textContent = post.name;
        h2.textContent = post.location;
        h3.textContent = post.elevation;
        p.textContent = post.description;
        p2.textContent = post.author;
        div.append(h1, h2, h3, p, p2);
        div.classList.add('post');
        stateEl.append(div);

    }
}
