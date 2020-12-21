const apiURL = `http://localhost:3001/`;

// const token = localStorage.getItem('token');

const login = (username,password) => {

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }

    // debugger
    return fetch(`${apiURL}/users/authenticate`, options)
    .then(response => {
        // debugger;
        return response.text()
    })
    .then(data => {
        // debugger
        const result = JSON.parse(data)
        // debugger;
        if(result.id){
            // debugger;
            localStorage.setItem('token',result.token)
            localStorage.setItem('ActiveUser',{username:result.username,id:result.id})
        }
        return result;
    })
}


export const authService = {
    login: login
}