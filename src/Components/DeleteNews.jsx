import React from 'react';
import history from './history';
import { useContext } from 'react';

import Context from './context';

import { NEWS_RECEIPT } from '../actions/types';

function Delete(props) {
  const state = useContext(Context);

  async function Remove() {
    try {
      const response = await fetch('http://localhost:3001/news/' + props.id, {
        method: 'DELETE',
      });
      isGetRequest();
      return await response.json();
    } catch (e) {
      alert('Ошибка: ' + e.status);
    }
  }

  async function isGetRequest() {
    try {
      const response = await fetch('http://localhost:3001/news');
      const news = await response.json();
      state.dispatch({
        type: NEWS_RECEIPT,
        data: news,
      });
    } catch (e) {
      alert('Ошибка: ' + e.status);
    }

    history.push('/');
  }

  return (
    <div>
      <button className="btn btn-primary btn-sm" onClick={Remove}>
        Удалить
      </button>
    </div>
  );
}

export default Delete;
