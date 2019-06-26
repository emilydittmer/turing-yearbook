import React from 'react';
import Person from './Person';
import './Students.css';

const Students = ({students}) => {
    const studentCards = students.map(person => {
    return(
      <Person 
        key={person.id}
        id={person.id}
        name={person.name}
        quote={person.quote}
        superlative={person.superlative}
        photo={person.photo}/>
    )
  })

  return (
    <section className='students'>
      {studentCards}
    </section>
  )
}

export default Students;

