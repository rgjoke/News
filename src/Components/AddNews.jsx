import React, { useState } from 'react';
import time from './Time';
import history from './history';
import { useMyContext } from './context';
import { Redirect } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';

function AddNews() {
    const [body, setBody] = useState('');
    const state = useMyContext();

    const handleChange = event  => {
        setBody({...body, [event.target.name]: event.target.value, 'time': time, login: state.state.reducerAuth.firstname});
        console.log(body)
    }

    const Add = event => {
        event.preventDefault();
        const url = 'http://localhost:3001/news';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(resp =>  isGet())
        .catch(err => alert(err));
    }

    const isGet = () => {
        const url = 'http://localhost:3001/news'
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
            <h1>Добавить новость</h1>
                <Form onSubmit={() => Add}>
                    <div className='form-row mt-5'>

                    <div className='form-group col-md-4'>
                        <label>Ссылка на первую картинку:</label>
                        <input className='form-control' name='img1' type='text' placeholder='Введите ссылку на картинку' required onChange={event => handleChange(event)} />
                    </div>

                    <div className='form-group col-md-4'>
                        <label>Ссылка на вторую картинку:</label>
                        <input className='form-control' name='img2' type='text' placeholder='Введите ссылку на картинку' required onChange={handleChange} />
                    </div>
                    
                    <div className='form-group col-md-4'>
                        <label>Ссылка на третью картинку:</label>
                        <input className='form-control' name='img3' type='text' placeholder='Введите ссылку на картинку' required onChange={handleChange} />
                    </div>

                    <div className='form-group col-md-9'>
                        <label>Заголовок:</label>
                        <input className='form-control' name='title' type='text' placeholder='Введите заголовок' required onChange={handleChange} />
                    </div>

                    <div className='form-group col-md-3'>
                        <label>Категория:</label>
                        <input className='form-control' name='catagory' type='text' placeholder='Введите категорию' required onChange={handleChange} />
                    </div>
                    
                    <div className='form-group col-md-12'>
                        <label>Статья:</label>
                        <textarea className='form-control' name='body' type='text' placeholder='Введите статью' required onChange={handleChange} style={{height: '250px'}} />
                    </div>

                    <input type='submit' name='Continue' />
                </div>
            </Form> 
        </Container>
        : <Redirect to='/' />
        }
        </div>
        : <Redirect to='/' />
        }
        </div>
    )

}


export default AddNews;
