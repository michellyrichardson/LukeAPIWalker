import React, {useEffect, useState} from 'react';
import axios from 'axios';

import Search from './Search';

const PlanetNumber = (props) => {

    const [planet, setPlanet] = useState([{
        name: "",
        climate: "",
        terrain: "",
        surface_water: "",
        population: "",
    }]);

    const searchPlanet = (id) => {
        axios.get(`https://swapi.dev/api/planets/${id}/`)
        .then(res => {
            setPlanet(res.data);
        })
        .catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        searchPlanet(props.number);
    }, [])

        return (
            <div>
                <Search />
                <div className="flex-container">
                <h1>{planet.name}</h1>
                <p>Climate: {planet.climate}</p>
                <p>Terrain: {planet.terrain}</p>
                <p>Surface Water: {planet.surface_water}</p>
                <p>Population: {planet.population}</p>
                </div> 
            </div>
        )
    }
export default PlanetNumber;