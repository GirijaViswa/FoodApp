const apiURL = `http://localhost:3001/`;

// const token = localStorage.getItem('token');

const login = (username,password) => {

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

/* METHOD 1 */
    // debugger;

    return fetch(`${apiURL}/users/authenticate`, options)
    .then(response => {
        // debugger;
        return JSON.parse(response)
    })
    .then(data => {
        // debugger;
        if(data.id){
            // debugger;
            localStorage.setItem('token',data.token)
            localStorage.setItem('ActiveUser',{username:data.username,id:data.id})
        }
        return data;
    })

/* METHOD 2 */
    // debugger
    // return fetch(`${apiURL}/users/authenticate`, options)
    // .then(response => {
    //     debugger;
    //     return response.text()
    // })
    // .then(data => {
    //     // debugger
    //     const result = JSON.parse(data)
    //     debugger;
    //     if(result.id){
    //         debugger;
    //         localStorage.setItem('token',result.token)
    //         localStorage.setItem('ActiveUser',{username:result.username,id:result.id})
    //     }
    //     return result;
    // })
}

// To create a new user
const createUser = (credentials) => {

    const options = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({credentials})
    }
    // debugger
    return fetch(`${apiURL}/users/create`, options)
    .then(response => JSON.parse(response))
    .then(data => {
        // debugger;
        if(data.id){
            // debugger;
            localStorage.setItem('token',data.token)
            localStorage.setItem('ActiveUser',{username:data.username,id:data.id})
        }
        return data;
    })
}


export const authService = {
    login: login,
    createUser:createUser
}