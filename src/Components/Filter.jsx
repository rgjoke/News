import React, { useState, useEffect } from 'react';

import { useMyContext } from './context';

import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

function Filter() {
  const state = useMyContext();
  const [resultFilter, setResultFilter] = useState();
  const [catagory, setCatagory] = useState();

  useEffect(() => {
    const a = [];
    state.state.reducerNews.map((i) => a.push(i.catagory));
    setCatagory(a.filter((i, j, k) => k.indexOf(i) === j));
  }, [state.state]);

  const handleChange = ({ target: { value } }) => {
    if (value === '') {
      setResultFilter(undefined);
    } else if (catagory.filter((i) => i.search(value) !== -1)) {
      setResultFilter(catagory.filter((i) => i.toLowerCase().search(value.toLowerCase()) !== -1));
    }
  };

  return (
    <div>
      <div className="input-group mb-3 mt-5">
        <input type="text" name="filter" className="form-control" onChange={handleChange} style={{ height: '30px' }} />
        <div className="input-group-append">
          <i className="input-group-text bg-lightaqua text-dark">
            <FontAwesomeIcon icon={faFilter} />
          </i>
        </div>
      </div>
      {resultFilter !== undefined ? (
        <div className="fs-3">
          {!resultFilter[0] ? (
            <p className="text-white fs-3">Не найдено...</p>
          ) : (
            <div>
              {resultFilter.map((i, idx) => (
                <div key={idx} className="fs-3 ml-2">
                  <Link to={`/catagory/${i}`}>
                    {i.length < 16 ? (
                      <p className="text-muted fs-3 wc">{i}</p>
                    ) : (
                      <p className="text-muted fs-3 wc">{i.substring(0, 13)}...</p>
                    )}
                  </Link>
                </div>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          {catagory && (
            <div>
              {catagory.map(
                (i, idx) =>
                  idx <= 4 && (
                    <div key={idx} className="fs-3 ml-2">
                      <Link to={`/catagory/${i}`}>
                        {i.length < 16 ? (
                          <p className="text-muted fs-3 wc">{i}</p>
                        ) : (
                          <p className="text-muted fs-3 wc">{i.substring(0, 14)}...</p>
                        )}
                      </Link>
                    </div>
                  ),
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Filter;
