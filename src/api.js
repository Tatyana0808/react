const token = 'asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k';
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