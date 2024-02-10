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

export async function addTasks({ title, topic, status, description, date }){
  const response = await fetch(' https://wedev-api.sky.pro/api/kanban', {
    method: 'POST',
    body: JSON.stringify({
      title: "Новая задача 2!",
      topic: "Research",
      status: "Без статуса",
      description: "Подробное описание задачи",
      date: "2024-01-07T16:26:18.179Z",
    })
})

const data = await response.json();
return data;

}

export async function deleteTask({ id, token }) {

  console.log('deleteTask id: ' + id);
  console.log('deleteTask token: ' + token);
  
  return fetch(API_URL + `/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((response) => {
    if (response.status !== 201) {
      alert('Something went wrong');
      throw new Error("Something went wrong");
    } else {
      return response.json()
    

    }
  
  })


}