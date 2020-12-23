import React from 'react';
import './Styling.css';

class Home extends React.Component{

    render(){
        return(
            <div>
                {localStorage.getItem('token') ?
                    <div className="Main-Content">
                        user logged in
                    </div>
                :
                    <div>
                        {this.props.history.push('/')}
                    </div>
                }
                {/* Welcome to Home Page */}
            </div>
        )
    }
}

export default Home;