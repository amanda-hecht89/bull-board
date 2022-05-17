import { checkAuth, logout, fetchPosts } from '../fetch-utils.js';

checkAuth();

const logOutBtn = document.getElementById('log-out');
logOutBtn.addEventListener('click', async () => {
    await logout();
});

async function onLoad() {
    const data = await fetchPosts();
    const myPost = data[0];
    const createdAt = new Date(myPost.created_at);
    const now = new Date();
}

onLoad();

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);

});