import styled from "styled-components";
import Card from "../UI/Card";

const WeatherCardForm = ({data}) => {

  return (
    <Card theme={theme} >
            <Header>
              <p>Town/City: {data.location.name}</p>
              <p>Country: {data.location.country}</p>
            </Header>

            <p>Weather: {data.current.condition.text}</p>
            <img src={data.current.condition.icon} alt={data.current.condition.text}/>
            <p>Temp: {data.current.temp_c}&deg;c</p>
            <p>Wind: {data.current.wind_mph}mph</p>
            <p> direction: {data.current.wind_dir}</p>
            <p>Gust: {data.current.gust_mph}mph</p>
          
    </Card>
  )
}

export default WeatherCardForm;

const theme = {
  width: '250px'
}

const Header = styled.div`
  background-color: blue;
  flex: 1;
  width: 100%;
`

