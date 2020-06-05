import React, { useState } from 'react';
import { useMyContext } from './context';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import '../App.css';


function Filter(event) {
    const state =  useMyContext();
    const [resultFilter, setResultFilter] = useState();
    const a = [];
    state.state.reducerNews.map(i => (
        a.push(i.catagory.toLowerCase())
    ));
    const catagory = a.filter((i,j,k) => k.indexOf(i) === j);

    const handleChange = event => {
        console.log(event)
        if(event.currentTarget.value.length === 0) {
            setResultFilter(undefined);
        }
        else if(catagory.filter(i => i.includes(event.currentTarget.value.toLowerCase())).length !== 0) {
            setResultFilter(catagory.filter(i => i.includes(event.currentTarget.value.toLowerCase())))
        }
        else {
            setResultFilter(null);
        }

}

    return (
        <div>
            <div className="input-group mb-3 mt-5">
                <input type='text' name='filter' className="form-control" onChange={handleChange} style={{height: '30px'}}  />
                <div className="input-group-append">
                    <i className='input-group-text bg-lightaqua text-dark'><FontAwesomeIcon icon={faFilter} /></i>
                </div>
            </div>
            {resultFilter !== undefined ? 
                <div className='fs-3'>
                    {resultFilter === null ?
                        <p className='text-white fs-3'>Не найдено...</p> 
                        :   <div>
                            {resultFilter.map((i, idx) => (
                                <div key={idx} className='fs-3 ml-2'>
                                    <Link to={`/catagory/${i}`}>
                                        {i.length < 16 ? <p className='text-muted fs-3 wc'>{i.charAt(0).toUpperCase() + i.substr(1).toLowerCase()}</p>
                                            :   <p className='text-muted fs-3 wc'>{i.charAt(0).toUpperCase() + i.substr(1).toLowerCase().substring(0, 13)}...</p>
                                        }    
                                    </Link>
                                </div>
                            ))}
                        </div>
                    }
                </div>
                : <div>
                    {catagory.map((i, idx) => (
                        idx <= 4 &&
                        <div key={idx} className='fs-3 ml-2'>
                            <Link to={`/catagory/${i}`}>
                            {i.length < 16 ? <p className='text-muted fs-3 wc'>{i.charAt(0).toUpperCase() + i.substr(1).toLowerCase()}</p>
                                :   <p className='text-muted fs-3 wc'>{i.charAt(0).toUpperCase() + i.substr(1).toLowerCase().substring(0, 13)}...</p>
                            }
                            </Link>
                        </div>
                    ))}
                </div>
            }
        </div>
    )
}

export default Filter;

