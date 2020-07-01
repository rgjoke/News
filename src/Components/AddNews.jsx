import React, { useState } from 'react';
import history from './history';
import { useMyContext } from './context';

import { Redirect } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';

import { NEWS_RECEIPT } from '../actions/types';

import time from './Time';

function AddNews() {
  const [body, setBody] = useState('');
  const state = useMyContext();

  const handleChange = ({ target: { name, value } }) => {
    setBody({
      ...body,
      [name]: value.charAt(0).toUpperCase() + value.substr(1).toLowerCase(),
      time: time,
      login: state.state.reducerAuth.firstname,
    });
  };

  async function Add(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/news', {
        method: 'POST',
        body: JSON.stringify(body),
        headers: {
          'Content-Type': 'application/json',
        },
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
      {state.state ? (
        <div>
          {state.state.reducerAuth ? (
            <Container className="mt-5">
              <h1>Добавить новость</h1>
              <Form onSubmit={Add}>
                <div className="form-row mt-5">
                  <div className="form-group col-md-4">
                    <label>Ссылка на первую картинку:</label>
                    <input
                      className="form-control"
                      name="img1"
                      type="text"
                      placeholder="Введите ссылку на картинку"
                      required
                      onChange={(event) => handleChange(event)}
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label>Ссылка на вторую картинку:</label>
                    <input
                      className="form-control"
                      name="img2"
                      type="text"
                      placeholder="Введите ссылку на картинку"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group col-md-4">
                    <label>Ссылка на третью картинку:</label>
                    <input
                      className="form-control"
                      name="img3"
                      type="text"
                      placeholder="Введите ссылку на картинку"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group col-md-9">
                    <label>Заголовок:</label>
                    <input
                      className="form-control"
                      name="title"
                      type="text"
                      placeholder="Введите заголовок"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group col-md-3">
                    <label>Категория:</label>
                    <input
                      className="form-control"
                      name="catagory"
                      type="text"
                      placeholder="Введите категорию"
                      required
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group col-md-12">
                    <label>Статья:</label>
                    <textarea
                      className="form-control"
                      name="body"
                      type="text"
                      placeholder="Введите статью"
                      required
                      onChange={handleChange}
                      style={{ height: '250px' }}
                    />
                  </div>

                  <input type="submit" name="Continue" />
                </div>
              </Form>
            </Container>
          ) : (
            <Redirect to="/" />
          )}
        </div>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}

export default AddNews;
