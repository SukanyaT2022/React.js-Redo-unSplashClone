import React, { useEffect, useState } from 'react';
import './App.css'
import Search from './Search';

const App = () => {
  const apiKey = 'c19t5LBUeXItCyO5nb5bpds50rtTKwmX7xOeFa4PnEBN8jabAxpjQW6U';
  const searchQuery = 'cat';
  const numPicPerPage = 10;
  const apiUrl = `https://api.pexels.com/v1/search?query=${searchQuery}&per_page=${numPicPerPage}`;
  const [data, setData] = useState();
  //we use use effect so it not infinity loop and call back
  useEffect(() => {

    fetch(apiUrl, {
      method: 'GET',
      headers: {
        Authorization: apiKey,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the data returned from the API
        setData(data.photos);
      });
  }, []); //[] means loop only one time - inside [] put ony name of state inside such as data or search
const dataCatch=(val)=>{
  console.log(val)
  setData(val.photos)

}

  return (
    <div className='wrapper'>
      <div >
        <Search onData = {dataCatch}/>
      </div>
      <div className='wrapper_inner'>
        {data &&
          data.map((val) => {
            return(
              <img src={val.src.tiny} />
          
            )
          })}
        </div>
    </div>
  );
};

export default App;
