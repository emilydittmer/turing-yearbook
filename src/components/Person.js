import React from 'react';
import './Person.css';

const Person = ({id, name, quote, superlative, photo}) => {
  return (
    <article className="person-card">
      <h2 className='name'>{name}</h2>
      <img src= {photo} alt="Person" className="card-photo"/>
      <p className='quote'>"{quote}"</p>
      <p className='super'>{superlative}</p>
    </article>
  )
}

export default Person;
