const CheckWeather = ({location}) =>{
  const windWarning = parseInt(location.current.wind_mph)
  if (location){
    if (windWarning <= 15 ) { 
        return <p>Going to be a boring day...</p>
      } else if (windWarning <= 30) {
        return <p>To soon to look out for houses</p>
      } else if ( windWarning > 31 && windWarning <= 60 ){
        return <p>Keep an eye out!</p>
      }  else if ( windWarning >= 61 && windWarning <= 90){
        return <p>Getting choppy.... cows are flying</p>
      } else {
        return (
          <>
            <p>Danger!!!! wind speed is {windWarning}mph!!</p>
            <p>Your probably off to see the wizard!</p>
          </>
        )
      }
  }
}

export default CheckWeather