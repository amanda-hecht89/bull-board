import { signInUser, signUpUser } from './fetch.utils.js';
// import functions and grab DOM elements
// let state
const signInForm = document.getElementById('sign-in');
const signUpForm = document.getElementById('sign-up');

// set event listeners 
signUpForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const data = new FormData(signUpForm);
    const user = await signUpUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('logged-in');
    }
});

signInForm.addEventListener('submit', async (e) =>{
    e.preventDefault();
    const data = new FormData(signInForm);
    const user = await signInUser(data.get('email'), data.get('password'));
    if (user) {
        location.replace('logged-in');
    }
});