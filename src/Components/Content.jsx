import React from 'react';
import { useMyContext } from './context';
import ContentView from './ContentView';

function Content() {
    const state = useMyContext();

    return (
        <div>
                {state.state !== undefined ?
                    <ContentView />
                : <p>Loading...</p>
            } 
        </div>
    )
}

export default Content;

