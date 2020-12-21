
export default function ConfigureServer() {

    let users = [{ id: 1, username: 'hello', password: 'world' },{ id: 2, username: 'user', password: 'user' }];
    // let realFetch = window.fetch;

    window.fetch = function (url, opts) {
        // debugger
        // const isLoggedIn = opts.headers['Authorization'] === 'Bearer fake-jwt-token';

        return new Promise((resolve, reject) => {
            
            setTimeout(() => {
              
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    
                    const params = JSON.parse(opts.body);
                    const user = users.find(x => x.username === params.username && x.password === params.password);
                    // debugger
                    if (!user) 
                        return error('Username or password is incorrect');
                    
                    return ok({
                        id: user.id,
                        username: user.username,
                        token: 'fake-jwt-token'
                    });
                }

                // get users - secure
                // if (url.endsWith('/users') && opts.method === 'GET') {
                //     if (!isLoggedIn) return unauthorised();
                //     return ok(users);
                // }

                // pass through any requests not handled above
                // realFetch(url, opts).then(response => resolve(response));

                // private helper functions

                function ok(body) {
                    // debugger;
                    resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) })
                }

                // function unauthorised() {
                //     resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorised' })) })
                // }

                function error(message) {
                    debugger
                    resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) })
                }
            }, 500);
        });
    }
}