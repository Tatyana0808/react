const token = 'ksdfsksdfjfsdjk'
const userURL = 'https://wedev-api.sky.pro/api/user'


export async function login({ login, password }) {
    const response = await fetch(userURL + '/login', {
        method: 'POST',
        body: JSON.stringify({
          login,
          password,
        })
    })

    const data = await response.json();
    return data;
}

export async function getCards() {
    const response = await fetch("", {
        headers: {
            Authorisation: `Bearer ${token}`,
        }
    });
    const data = await response.json();
    return data;
}