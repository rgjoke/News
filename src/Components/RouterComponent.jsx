import React, { useReducer, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import Content from './Content';
import AddNews from './AddNews';
import EditNews from './EditNews';
import FullNews from './FullNews';
import Context from './context';
import rootReducer from '../Reducers/rootReducer';
import FilterPage from './FilterPage';



  function RouterComponent() {
    const [state, dispatch] = useReducer(rootReducer);

   useEffect(() => {
        const url = 'http://localhost:3001/news';
        fetch(url)
        .then(res => res.json())
        .then(response => {
            dispatch({
                type: 'News',
                data: response
            })
        })
        .catch(err => alert(err))
    }, [])

    return (
        <Context.Provider value={{state: state, dispatch: dispatch}}>
        <Router history={history}>
            <Switch>
                <Route path='/' exact component={Content} />
                <Route path='/add' component={AddNews} />
                <Route path='/edit/:id' component={EditNews} />
                <Route path='/fnews/:id' component={FullNews} />
                <Route path='/catagory/:catagory' component={FilterPage} />
            </Switch>
        </Router>
        </Context.Provider>
    )
  }

  export default RouterComponent;
