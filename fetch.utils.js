const SUPABASE_URL = 'https://lrkvacapghknfzyfbduq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imxya3ZhY2FwZ2hrbmZ6eWZiZHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTIzMDMzNzksImV4cCI6MTk2Nzg3OTM3OX0.R4JDMarLJDInohMRIVMNLERvl6nc2GLUQI8t5Dt8mFw';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function signUpUser(email, password) {
    const response = await client.auth.signUp({ email, password});
    return response.user; 
}

export async function signInUser(email, password) {
    const response = await client.auth.signIn({ email, password});
    return response.user;
}  

export function getUser() {
    return client.auth.session() && client.auth.session().user;
}

export async function checkAuth() {
    const user = getUser();

    if (!user) location.replace('/');
}

export async function logout() {
    await client.auth.aignOut();

    return (window.location.href = '/');
}

export async function redirectIfLoggedIn() {
    if (getUser()) {
        location.replace('../logged-in/index.html');
    }
}

export async function getState() {
    const resp = await client.from('Colorado').select('*');
    return resp.data;
}
export async function getStateById(id) {
    const resp = await client.from('Colorado').select('*').match({ id }).single();
    return resp.data;

}


