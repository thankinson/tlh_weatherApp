import { useState } from "react";
import SearchForm from "../../componets/SearcWeather/SearchForm";
import Container from "../../componets/UI/Container";
import WeatherCardForm from "../../componets/WeatherCard/WeatherCardForm";
import { SearchByLocation } from "../../utils";
import CheckWeather from "../Warnings/WindWarning";

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

  // const CheckWeather = () =>{
  //   const windWarning = parseInt(location.current.wind_mph)
  //   if (location){
  //     if (windWarning <= 15 ) { 
  //         return <p>Going to be a boring day...</p>
  //       } else if (windWarning <= 30) {
  //         return <p>To soon to look out for houses</p>
  //       } else if ( windWarning > 31 && windWarning <= 60 ){
  //         return <p>Keep an eye out!</p>
  //       }  else if ( windWarning >= 61 && windWarning <= 90){
  //         return <p>Getting choppy.... cows are flying</p>
  //       } else {
  //         return (<>
  //           <p>Danger!!!! wind speed is {windWarning}mph!!</p>
  //           <p>Your probably off to see the wizard!</p>
  //         </>)
  //       }
  //   }
  // }
  
  return(
    <Container>
      <Container theme={theme}>
        <SearchForm  onChange={onSearchHandler} onSubmit={searchLocationHandler} />
      </Container>
      <Container theme={weather}>
           {location && <WeatherCardForm data={location}/>} 
           {location && <CheckWeather location={location} />}      
      </Container>
    </Container>
  )
}

export default Home;

const theme = {
  width: '30%',
  align: 'flex-start',
  backgroundColor: 'red'
}

const weather = {
  flexDirection: 'column'
}