
import React, {useEffect} from 'react';
import axios from 'axios';

const ShowPeople = ({idx, thisPeople}) => {

    const getOnePeople = (url) => {
        axios.get(url)
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            })
    }

    useEffect(() => {
        getOnePeople(thisPeople.url);
    }, [])

    return (
        
        <div className="flex-container">
            <h3>{thisPeople.name}</h3>
            <p>Height: {thisPeople.height}</p>
            <p>Mass: {thisPeople.mass}</p>
            <p>Hair Color: {thisPeople.hair_color}</p>
            <p>Skin Color: {thisPeople.skin_color}</p>
        </div>
    )
}
export default ShowPeople;