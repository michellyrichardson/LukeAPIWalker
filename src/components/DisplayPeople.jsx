import React, {useEffect, useState} from 'react';
import ShowPeople from './ShowPeople';

const DisplayPeople = ({people}) => {

    

    return (
        <div>
            { people.map((val, idx) =>
                <ShowPeople key={idx} thisPeople={val} />
            )}
        </div>
    )
}
export default DisplayPeople;