const token = 'ksdfsksdfjfsdjk'
const userURL = 'https://wedev-api.sky.pro/api/user'


export async function login({ login, passwod }) {
    const respons = fetch(userURL + '/login', {
        method: 'POST',
        bodi: JSON.stringify({
          login,
          passwod,
        })
    })

    const data = await respons.json();
    return data;
}

export async function getCards() {
    const respons = await fetch("", {
        headers: {
            Authorisation: `Bearer ${token}`,
        }
    });
    const data = await respons.json();
    return data;
}