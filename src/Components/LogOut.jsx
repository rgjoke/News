import React from 'react';
import { useContext } from 'react';
import Context from './context';

function LogOut() {
    const state = useContext(Context);

    const out = () => {
        state.dispatch({
            type: 'Auth_False',
        })
    }

    return (
        <div>
            <button onClick={out} className='fs-2 button'>Выйти</button>
        </div>
    )
}

export default LogOut;