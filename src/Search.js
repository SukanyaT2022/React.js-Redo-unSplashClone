import React, { useEffect, useState } from 'react'
import './Search.css'

const Search = (props) => {
    const[search,setSearch]= useState()
    const apiKey = 'c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U';
    const numPicPerPage = 10;
    const apiUrl = `https://api.pexels.com/v1/search?query=${search}&per_page=${numPicPerPage}`;
    
    
     const searchHandler =()=>{
      fetch(apiUrl, {
        method: 'GET',
        headers: {
          Authorization: apiKey,
        },
      })
        .then((response) => response.json())
        .then((data) => {
     
            // sending data from child to parent
            props.onData(data)
            //onData comfrom app.js line 34 is a key
        });
     } 

  return (
    <div className='search_wrapper'>
        <input 
          type='text' 
          placeholder='Search Your Category' className='inputBox'
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button className='searchButton' onClick={searchHandler}>Search</button>
    </div>
  )
}

export default Search
