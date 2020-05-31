import React, { useContext } from 'react';
import FacebookLogin from 'react-facebook-login';
import Context from './context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';



function FacebookLogIn() {
    const state = useContext(Context);
    
    const responseFacebook = response => {
        state.dispatch({
            type: 'Auth',
            auth: {
                firstname: response.name
        }
        })
    }

    return (
        <div>
            <FacebookLogin
                appId="544176816491036"
                cssClass='facebook'
                fields='name,email'
                callback={responseFacebook}
                render={renderProps => (
                    <button onClick={renderProps.onClick}></button>
                )}
                icon={<FontAwesomeIcon icon={faFacebookF} />}
                textButton=''
            />
        </div>
    )
}

export default FacebookLogIn;
