import { useState } from "react";
import Card from "../../componets/UI/Card";
import WeatherCardForm from "../../componets/WeatherCard/WeatherCardForm";
import { SearchByLocation } from "../../utils";

const Home = () => {
  const [ search, setSearch ] = useState('')
  const [ location, setLocation] = useState('');
  
  const onSearchHandler = (e) => {
    setSearch(e.target.value)
  }
  
  const searchLocationHandler = async (e) => { 
    e.preventDefault()
    console.log("Home.js location search ", search)
    const data = await SearchByLocation(search)
    console.log("Home.js location search ", data)
    setLocation(data.data)
  }
  
  return(
    <div>
      <form onSubmit={searchLocationHandler}>
        <label>Enter Town/City</label>
        <input placeholder="Search Location by Town/City"  onChange={onSearchHandler}/>
        <button>Click</button>
      </form>
      <div>
        {location && <WeatherCardForm data={location}/>}
      </div>
    </div>
  )
}

export default Home;
