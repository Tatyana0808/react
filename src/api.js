const token = 'asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k';
const API_URL_USER = 'https://wedev-api.sky.pro/api/user';
const  API_URL = 'https://wedev-api.sky.pro/api/kanban';


export async function login({ login, password }) {
    const response = await fetch(API_URL_USER + '/login', {
        method: 'POST',
        body: JSON.stringify({
          login,
          password,
        })
    })

    const data = await response.json();
    return data;
}

export async function getTasks({ token }) {
    
    const response = await fetch(API_URL, {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`,
        }
    });
    if (!response.ok){
        throw new Error("Ошибка сервера")
    }
    const data = await response.json();
    return data;
}

export async function userRegistation({ login, name, password }) {
    const response = await fetch("https://wedev-api.sky.pro/api/user", {
      method: "POST",
      body: JSON.stringify({
        login,
        name,
        password,
      }),
    });
    if(response.ok){
      const data = await response.json(); 
      
    } else {
      const error = await response.json()
      
      throw new Error(error.error)
  
    }

    
}

// export asyns function deleteTask({ id, token }) {
  
//   return fetch(API_URL + `/${id}`, {
//     method: 'DELETE',
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }).then((response) => {
//     if (response.status !== 201) {
//       alert('Something went wrong');
//       throw new Error("Something went wrong");
//     } else {
//       return response.json()
    

//     }
  
//   })


// }