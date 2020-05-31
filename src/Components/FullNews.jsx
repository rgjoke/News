import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function FullNews(props) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }

    if(props.location.data) {
        return (
            <Container>
                <Row>
                    {props.location.data.map((i, idx) => (
                        <Col key={idx} sm={12} className='text-justify'> 
                            <h3 className='mt-5 font-weight-bold'>{i.title}</h3>
                            <Carousel activeIndex={index} onSelect={handleSelect} className='mt-5'>
                                <Carousel.Item>
                                    <img src={i.img1} alt='first slide' className='d-block w-100' style={{height: '400px'}} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={i.img2} alt='second slide' className='d-block w-100' style={{height: '400px'}} />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={i.img3} alt='third slide' className='d-block w-100' style={{height: '400px'}} />
                                </Carousel.Item>
                            </Carousel>
                            <p className='mt-5 text-indent'>{i.body}</p>
                            <p>{i.catagory}</p>
                            <p>{i.login}</p>
                            <p>{i.time}</p>
                        </Col>
                    ))}
                </Row>
            </Container>
        )
    }
    else {
        return <Redirect to='/' />;
    }
}

export default FullNews;
