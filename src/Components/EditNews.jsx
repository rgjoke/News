import React, { useState, useContext } from 'react';
import { Container } from 'react-bootstrap';
import Context from './context';
import { Redirect } from 'react-router-dom';

import time from './Time';
import history from './history';


function EditNews(props) {
    const [body, setBody] = useState();
    const state = useContext(Context);

    const handleChange = event  => {
        setBody({...body, [event.target.name]: event.target.value, 'time': time});
    }

    const Edit = event => {
        event.preventDefault();
        const url = 'http://localhost:3001/news';
        fetch(url + '/' + props.match.params.id, {
            method: 'PATCH',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => isGet())
        .catch(err => alert(err));
    }

    const isGet = () => {
        const url = 'http://localhost:3001/news';
        fetch(url)
        .then(res => res.json())
        .then(response => {
            state.dispatch({
                type: 'News',
                data: response
            })
        })
        .catch(err => alert(err))

        history.push('/')
        }

    return (
        <div>
            {state.state ?
            <div>
                {state.state.reducerAuth ? 
        <Container className='mt-5'>
            <h1>Редактирование новости</h1>
            <form onSubmit={Edit}>
                <div className='form-row mt-5'>

                    <div className='form-group col-md-4'>
                        <label>Ссылка на первую картинку:</label>
                        <input className='form-control' name='img1' type='text' placeholder='Введите ссылку на картинку' onChange={handleChange} />
                    </div>

                    <div className='form-group col-md-4'>
                        <label>Ссылка на вторую картинку:</label>
                        <input className='form-control' name='img2' type='text' placeholder='Введите ссылку на картинку' onChange={handleChange} />
                    </div>

                    <div className='form-group col-md-4'>
                        <label>Ссылка на третью картинку:</label>
                        <input className='form-control' name='img3' type='text' placeholder='Введите ссылку на картинку' onChange={handleChange} />
                    </div>

                    <div className='form-group col-md-9'>
                        <label>Заголовок:</label>
                        <input className='form-control' name='title' type='text' placeholder='Введите заголовок. Минимум 25 символов' onChange={handleChange} />
                    </div>
                    
                    <div className='form-group col-md-3'>
                        <label>Категория:</label>
                        <input className='form-control' name='catagory' type='text' placeholder='Введите категорию' onChange={handleChange} />
                    </div>

                    <div className='form-group col-md-12'>
                        <label>Статья:</label>
                        <textarea className='form-control' name='body' type='text' placeholder='Введите статью. Минимум 80 символов' onChange={handleChange} style={{height: '250px'}} />
                    </div>

                    <input type='submit' value='Сохранить' />
                </div>
        </form>
        </Container>
        : <Redirect to='/' />
        }
        </div>
        : <Redirect to='/' />
    }
    </div>
    )
}

export default EditNews;
