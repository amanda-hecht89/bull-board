import { checkAuth, logout, fetchPosts, createNewPost } from '../fetch-utils.js';

const form = document.getElementById('new-post');

checkAuth();

const logOutBtn = document.getElementById('log-out');
logOutBtn.addEventListener('click', async () => {
    await logout();
});

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const NewPost = {
        name: data.get('name'),
        location: data.get('location'),
        elevation: data.get('elevation'),
        description: data.get('description'),
        author: data.get('author'),
    };
    const resp = await createNewPost(NewPost);
    console.log(resp);

});