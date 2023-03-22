import styled from "styled-components";
import Card from "../UI/Card";

const WeatherCardForm = ({data}) => {

  return (
    <Card theme={theme} >
            <Header>
              <Para>{data.location.name}</Para>
              <Para>{data.location.country}</Para>
            </Header>
            <TestDiv>
            <Para>{data.current.condition.text}</Para>
            </TestDiv>
            <Weather>
            <img src={data.current.condition.icon} alt={data.current.condition.text}/>

            <Temp>{data.current.temp_c}&deg;c</Temp>
            </Weather>
            <WindSpeed>
              <Para>Wind: {data.current.wind_mph}mph</Para>
              <Para>Gust: {data.current.gust_mph}mph</Para>
            </WindSpeed>
            <Para> Wind Direction: {data.current.wind_dir}</Para>
          
    </Card>
  )
}

export default WeatherCardForm;

const theme = {
  width: '250px'
}

const TestDiv = styled.div`
`

const Header = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: blue;
  flex: 1;
  width: 100%;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  border-bottom: 1px solid black;
`
const Weather = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid black;
`
const WindSpeed = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`

const Para = styled.p`
  padding: 0rem;
  margin: 5px;
`
const Temp = styled.p`
  font-size: 3rem;
  padding: 5px;
  margin: 0%;
`
