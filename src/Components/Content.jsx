import React from 'react';
import { useMyContext } from './context';
import ContentView from './ContentView';
import Header from './Header';
import { Row, Col } from 'react-bootstrap';

function Content() {
    const state = useMyContext();

    return (
        <div className='container-fluid'>
                {state.state !== undefined ?
                <Row>
                    <Col sm={2} className='bg-black sidebar d-sm-none d-md-block sticky-top'>
                        <Header />
                    </Col>
                    <Col sm={10}>
                        <ContentView />
                    </Col>
                </Row>
                : <p>Loading...</p>
            } 
        </div>
    )
}

export default Content;

