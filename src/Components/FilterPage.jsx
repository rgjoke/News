import React, { useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { Row, Col } from 'react-bootstrap';

import { Link } from 'react-router-dom';

import Context from './context';
import Header from './Header';

function FilterPage(props) {
  const state = useContext(Context);
  const catagory = props.match.params.catagory;

  return (
    <div className="container-fluid">
      {state.state ? (
        <Row>
          <Col lg={2} className="bg-black sidebar sticky-md-top">
            <Header />
          </Col>
          <Col lg={10} md={12}>
            <h1 className="mt-5 d-flex justify-content-center">{catagory}</h1>
            <Row>
              {state.state.reducerNews.map(
                (i) =>
                  i.catagory === catagory && (
                    <Col md={6} lg={4} xl={3} key={i.id} className="mt-5">
                      <div className="bg-grey">
                        <Link
                          className="td"
                          to={{
                            pathname: `/fnews/${i.id}`,
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
                          <img
                            src={i.img1}
                            alt="img"
                            className="img-fluid w-100"
                            style={{ height: '200px' }}
                          />
                          <div className="mt-3 ml-3 mr-3">
                            {i.title.length < 25 ? (
                              <h5 className="font-weight-bold wc text-dark">{i.title}</h5>
                            ) : (
                              <h5 className="font-weight-bold fs-1 text-dark">
                                {i.title.substring(0, 25)}...
                              </h5>
                            )}
                          </div>
                          <p className="text-justify ml-3 mr-3 wc fs-4 text-dark">
                            {i.body.substring(0, 80)}...
                          </p>
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
                  ),
              )}
            </Row>
          </Col>
        </Row>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}

export default FilterPage;
