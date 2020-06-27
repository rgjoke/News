import React from 'react';
import { useMyContext } from './context';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Delete from './DeleteNews';
import Header from './Header';

export default function ContentView() {
  const news = useMyContext();

  return (
    <Container fluid>
      {news.state.reducerNews !== undefined && (
        <Row>
          <Col lg={2} className="bg-black sticky-top sidebar">
            <Header />
          </Col>
          <Col lg={10} md={12}>
            <h1 className="mt-5">Новости</h1>
            <Row>
              {news.state.reducerNews.map((i) => (
                <Col md={6} lg={4} xl={3} key={i.id} className="mt-5">
                  <div className="bg-grey rounded">
                    <img
                      src={i.img1}
                      alt="img"
                      className="img-fluid w-100 rounded-top"
                      style={{ height: '200px' }}
                    />
                    {news.state.reducerAuth && (
                      <div className="d-flex justify-content-around mt-3">
                        <Delete id={i.id} />
                        <Link to={`edit/${i.id}`}>
                          <button className="btn btn-primary btn-sm">Изменить</button>
                        </Link>
                      </div>
                    )}
                    <Link
                      className="td"
                      to={{
                        pathname: `fnews/${i.id}`,
                        data: [
                          {
                            img1: i.img1,
                            img2: i.img2,
                            img3: i.img3,
                            title: i.title,
                            body: i.body,
                            catagory: i.catagory,
                            login: i.login,
                            time: i.time,
                          },
                        ],
                      }}>
                      <div className="mt-3 ml-3 mr-3">
                        {i.title.length < 25 ? (
                          <h5 className="font-weight-bold wc text-dark">{i.title}</h5>
                        ) : (
                          <h5 className="font-weight-bold fs-1 text-dark">
                            {i.title.substring(0, 25)}...
                          </h5>
                        )}
                      </div>
                      {i.body.length < 80 ? (
                        <p className="text-justify ml-3 mr-3 wc fs-4 text-dark">{i.body}</p>
                      ) : (
                        <p className="text-justify ml-3 mr-3 wc fs-4 text-dark">
                          {i.body.substring(0, 80)}...
                        </p>
                      )}
                      <p className="mr-3 ml-3 fs-4 text-dark">{i.catagory}</p>
                      <p className="mr-3 ml-3 fs-2 text-dark">
                        Автор: <b>{i.login}</b>
                      </p>
                      <p className="mr-3 ml-3 pb-3 fs-2 text-dark">
                        <em>{i.time}</em>
                      </p>
                    </Link>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      )}
    </Container>
  );
}
