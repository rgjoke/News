import React, { useContext } from 'react';

import Context from './context';

import { AUTH_FALSE } from '../actions/types';

function LogOut() {
  const state = useContext(Context);

  const out = () => {
    state.dispatch({
      type: AUTH_FALSE,
    });
  };

  return (
    <div>
      <button onClick={out} className="fs-2 button">
        Выйти
      </button>
    </div>
  );
}

export default LogOut;
