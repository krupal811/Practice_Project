import React from 'react'
import Person from '../Persons/Person/Person'
const Persons = (props) => {
    return props.Persons.map((person, index) => {
        return <Person
            name={person.name}
            age={person.age}
            id={person.id}
            click={() => props.delete(index)}
            change={(event) => props.changed(event, person.id)}
         //  isAuth={props.isAuthenticated}
        />
    })
}

export default Persons; 

