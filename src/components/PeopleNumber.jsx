import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Search from './Search';

const PeopleNumber = (props) => {

    const [people, setPeople] = useState([{
        name: "",
        height: "",
        mass: "",
        hair_color: "",
        skin_color: "",
    }]);

    const searchPeople = (id) => {
        axios.get(`https://swapi.dev/api/people/${id}/`)
        .then(res => {
            setPeople(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        searchPeople(props.number);
    }, [])

        return (
            <div>
                <Search />
                <div className="flex-container">
                <h1>{people.name}</h1>
                <p>Height: {people.height}</p>
                <p>Mass: {people.mass}</p>
                <p>Hair Color: {people.hair_color}</p>
                <p>Skin Color: {people.skin_color}</p>
                </div> 
            </div>
        )
    }
export default PeopleNumber;