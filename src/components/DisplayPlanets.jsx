import React, {useEffect, useState} from 'react';
import ShowPlanets from './ShowPlanets';

const DisplayPlanets = ({planets}) => {

    

    return (
        <div>
            { planets.map((val, idx) =>
                <ShowPlanets key={idx} thisPlanet={val} />
            )}
        </div>
    )
}
export default DisplayPlanets;