import React from 'react';
import Person from './Person';
import './Cohort.css';

const Cohort = ({staff}) => {
  const staffCards = staff.map(person => {
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
    <section className="cohort">
      {staffCards}
    </section>
  )
}

export default Cohort;
