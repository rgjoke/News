import React from 'react';
import GoogleLogIn from './GoogleLogIn';
import FacebookLogIn from './FaceBookLogIn';
import { useMyContext } from './context';
import { Row, Col } from 'react-bootstrap';
import LogOut from './LogOut';
import { Link } from 'react-router-dom';

function Autorized() {
    const state = useMyContext();
    
    return (
        <div>
            {state.state.reducerAuth ?    
                <div className='mt-5'>
                    <Row>
                        <Col sm={12} className='d-flex justify-content-center'>
                            <div className='bg-lightaqua img-profile'><p>{state.state.reducerAuth.firstname && state.state.reducerAuth.firstname.substring(0,1)}</p></div>
                        </Col>
                        <Col sm={12} className='d-flex justify-content-center'>
                            <p className='text-white mt-4 fs-4'>{state.state.reducerAuth.firstname && state.state.reducerAuth.firstname}</p>
                        </Col>
                        <Col sm={12} className='d-flex justify-content-center'>
                            <Link to='/add'>
                                <button className='fs-2 button'>Добавить</button>
                            </Link>
                        </Col>
                        <Col sm={12} className='d-flex justify-content-center mt-3'>
                            <LogOut />
                        </Col>
                    </Row>
            </div>
                :
                <div>
                    <h6 className='text-white mt-5 d-flex justify-content-center fs-4'>Войти через...</h6>
                    <div className='mt-3 d-flex justify-content-around'>
                        <GoogleLogIn />
                        <FacebookLogIn />
                    </div> 
                </div>
        }
        </div>
    )
}

export default Autorized;
