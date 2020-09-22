import React, {useEffect, useState} from 'react';
import axios from 'axios';

const ShowPlanets = ({idx, thisPlanet}) => {

    const getOnePlanet = (url) => {
        axios.get(url)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getOnePlanet(thisPlanet.url);
    }, [])

    return (
        <div className="flex-container">
            <h3>{thisPlanet.name}</h3>
            
            <p>Climate: {thisPlanet.climate}</p>
            <p>Terrain: {thisPlanet.terrain}</p>
            <p>Surface Water: {thisPlanet.surface_water}</p>
            <p>Population: {thisPlanet.population}</p>
        </div>
    )
}
export default ShowPlanets;