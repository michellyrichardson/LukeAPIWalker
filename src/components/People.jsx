import React, {useEffect, useState} from 'react';
import DisplayPeople from './DisplayPeople';
import Search from './Search';

const People = () => {

    const [people, setPeople] = useState([{
        name: "Luke Skywalker",
        height: "172",
        mass: "77",
        hair_color: "Blond",
        skin_color: "Fair",
        url: "http://swapi.dev/api/people/1/",
    }]);

    useEffect(() => {
        
        fetch("https://swapi.dev/api/people/")
            .then(response => {
                return response.json();
            }).then(response => {
                setPeople(response.results);
            }).catch(err=>{
                console.log(err);
            })
    }, [])

    return (
        <div>
            <Search/>
            <DisplayPeople people={people}/>
        </div>
    )
}
export default People;