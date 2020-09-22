import React, {useEffect, useState} from 'react';
import DisplayPlanets from './DisplayPlanets';
import Search from './Search';

const Planets = () => {

    const [planets, setPlanets] = useState([{
        name: "Tatooine",
        climate: "Arid",
        terrain: "Dessert",
        surface_water: "1",
        population: "120000", 
        url: "http://swapi.dev/api/planets/1/",

    }]);

    useEffect(() => {
        
        fetch("https://swapi.dev/api/planets/")
            .then(response => {
                return response.json();
            }).then(response => {
                setPlanets(response.results);
            }).catch(err=>{
                console.log(err);
            })
    }, [])

    return (
        <div>
            <Search/>
            <DisplayPlanets planets={planets}/>
        </div>
    )
}
export default Planets;