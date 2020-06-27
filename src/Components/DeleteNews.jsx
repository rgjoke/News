import React from 'react';
import history from './history';
import { useContext } from 'react';
import Context from './context';

function Delete(props) {
  const state = useContext(Context);

  function Remove() {
    const url = 'http://localhost:3001/news';
    fetch(url + '/' + props.id, {
      method: 'DELETE',
    })
      .then((res) => isGet())
      .catch((err) => alert(err));
  }

  async function isGet() {
    try {
      const response = await fetch('http://localhost:3001/news');
      const news = await response.json();
      state.dispatch({
        type: 'News',
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
