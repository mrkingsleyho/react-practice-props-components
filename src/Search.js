import React from 'react';
import data from './data';

const Search = () => {
  return (
    <section className='py-4 container'>
      <div className='row justify-content-center'>

        {data.cardData.map((myheroacademia, index)=>{
          return (
            <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
              <div className='card p-0 overflow-hidden h-100 shadow'>
                <img src={myheroacademia.img} className='card-img-top' alt='' />
                <div className='card-body'>
                  <h5 className='card-tite'>{myheroacademia.title}</h5>
                  <p className='card-text'>{myheroacademia.desc}</p>
                </div>
              </div>
            </div>
          )
        })}
        

      </div>

    </section>
  )
};

export default Search;
