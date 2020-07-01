import React from 'react';

import { useMyContext } from './context';
import ContentView from './ContentView';

import PacmanLoader from 'react-spinners/PacmanLoader';

function Content() {
  const state = useMyContext();

  return (
    <div>
      {state.state !== undefined ? (
        <ContentView />
      ) : (
        <div className="spinner">
          <PacmanLoader color={'#03E8EC'} loading={true} />
        </div>
      )}
    </div>
  );
}

export default Content;
