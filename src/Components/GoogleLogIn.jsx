import React, { useEffect, useContext } from 'react';
import Context from './context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

function GoogleLogIn() {
    const state = useContext(Context)

    useEffect(() => {
        const _onInit = auth2 => {
            return auth2
          }
          const _onError = err => {
            alert('error', err)
          }
          window.gapi.load('auth2', function() {
            window.gapi.auth2
              .init({ 
                client_id:
                  process.env.REACT_APP_GOOGLE_CLIENT_ID,
              })
              .then(_onInit, _onError)
          })
    }, [])

    const signIn = () => {
        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2.signIn().then(googleUser => {
          const profile = googleUser.getBasicProfile()
          const data = {
            login: profile.getName(),
            firstname: profile.getGivenName(),
            lastname: profile.getFamilyName(),
            email: profile.getEmail()
        }
          state.dispatch({
            type: 'Auth',
            auth: data
          })
        })
      }


      return (
          <div>
            <button onClick={signIn} className='google'><FontAwesomeIcon icon={faGoogle} /></button>
          </div>
      )
}

export default GoogleLogIn;