/* METHOD 1 */
export default function ConfigureServer() {
    
    let opts = {headers:{'Content-Type':'application/json','Accept':'application/json','mode':'cors'}}
    let userDetails = []
    fetch('Data.json',opts)
        .then(response => response.json())
        .then(data => {
            userDetails = data.users
            console.log('data',userDetails)
        })
    
    window.fetch = function(url,opts){  

        if(url.endsWith('/users/authenticate') && opts.method === 'POST'){
            // debugger;
            let params = JSON.parse(opts.body)
            let user = userDetails.find(x => x.username === params.username && x.password === params.password);

            if(user){
                console.log("sent",JSON.stringify({id:user.id,username:user.username,token:"Token granted",status:"ok"}))
                // debugger
                return Promise.resolve(JSON.stringify({id:user.id,username:user.username,token:"Token granted",status:"ok"}))
            }
            else{
                // debugger
                return Promise.resolve(JSON.stringify({message:"Incorrect username or password",token:"Token declined",status:"declined"}))
            }
        }
    }
//To create a user
    window.fetch = function(url,opts){  
        // debugger;
        if(url.endsWith('/users/create') && opts.method === 'PATCH'){
            // debugger;
            let params = JSON.parse(opts.body).credentials
            let user = {"id":userDetails.length+1,"username":params.username,"password":params.password}
            //
            //   storing in global variable will be invalid after page refresh
            //
            userDetails.push(user)
            // debugger
            if(user){
                return Promise.resolve(JSON.stringify({id:user.id,username:user.username,token:"Token granted",status:"ok"}))
            }
            else{
                return Promise.resolve(JSON.stringify({message:"Unable to create the user",token:"Token declined",status:"declined"}))
            }

        }
    }
}

/* METHOD 2 */

// export default function ConfigureServer() {

//     let users = [{ id: 1, username: 'hello', password: 'world' },{ id: 2, username: 'user', password: 'user' }];
//     // let realFetch = window.fetch;

//     window.fetch = function (url, opts) {
//         // debugger
//         // const isLoggedIn = opts.headers['Authorization'] === 'Bearer fake-jwt-token';

//         return new Promise((resolve, reject) => {
            
//             setTimeout(() => {
              
//                 if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    
//                     const params = JSON.parse(opts.body);
//                     const user = users.find(x => x.username === params.username && x.password === params.password);
//                     // debugger
//                     if (!user) 
//                         return error('Username or password is incorrect');
                    
//                     return ok({
//                         id: user.id,
//                         username: user.username,
//                         token: 'fake-jwt-token'
//                     });
//                 }

//                 // get users - secure
//                 // if (url.endsWith('/users') && opts.method === 'GET') {
//                 //     if (!isLoggedIn) return unauthorised();
//                 //     return ok(users);
//                 // }

//                 // pass through any requests not handled above
//                 // realFetch(url, opts).then(response => resolve(response));

//                 // private helper functions

//                 function ok(body) {
//                     debugger;
//                     resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
//                 }

//                 // function unauthorised() {
//                 //     resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
//                 // }

//                 function error(message) {
//                     debugger
//                     resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
//                 }
//             }, 500);
//         });
//     }
// }

