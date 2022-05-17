import { checkAuth, logout } from '../fetch.utils.js';

checkAuth();

const logOutBtn = document.getElementById('logout');
logOutBtn.addEventListener('click', async () => {
    await logout();
});