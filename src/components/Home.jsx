import React, { useState } from 'react';
import Search from './Search';
import { navigate } from '@reach/router';

const Home = (props) => {

    const [resource, setResource] = useState("");
    const [id, setId] = useState("");

    const submitHandler = e => {
      e.preventDefault();
      navigate(`/${resource}/${id}`)
    }

  return (
    <div className="flex-container">
      <Search />
      <h1>Welcome Star Wars Fan</h1>
      <br />
      
      <form class="ui form" onSubmit={submitHandler}>
        <select onChange={(e)=>{setResource(e.target.value)}} value={resource}>
          <option value="" >Select</option>
          <option value="people" >People</option>
          <option value="planets" >Planets</option>
        </select>
        <br/>
        <input type="text" placeholder="Insert Id" onChange={(e)=>{setId(e.target.value)}} value={id}></input>
        <br/>
        <button class="ui secondary button" value="Submit">Display</button>
      </form>

    </div>
    )
  }

export default Home;