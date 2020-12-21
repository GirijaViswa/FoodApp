import React from 'react';

const SignUp = () => {

    return(
        <div>
            Welcome to signUp Page

            <form>

                <label>Username  </label>
                <input name="username" placeholder="username"/><br/><br/>

                <label>Set Password  </label>
                <input name="password" type="password" placeholder="password"/><br/><br/>

                <label>Confirm Password  </label>
                <input name="password" type="password" placeholder="password"/><br/><br/>

                <button type="submit">SignUp</button>

            </form>

        </div>
    );
}

export default SignUp;