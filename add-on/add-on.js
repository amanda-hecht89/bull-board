import { checkAuth, logout } from '../fetch-utils.js';

checkAuth();

const logOutBtn = document.getElementById('log-out');
logOutBtn.addEventListener('click', async () => {
    await logout();
});