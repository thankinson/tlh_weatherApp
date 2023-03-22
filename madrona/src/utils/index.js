import axios from 'axios';
const { REACT_APP_API_URL } = process.env

export const SearchByLocation = async (search) => {
  console.log("Search by location hit", search)
  try {
    const data = await axios.get(`${REACT_APP_API_URL}/weatherLocation/${search}`)
    console.log("Search result index.js ", data.data)
    return data
  } catch (error) {
    console.log(error)
  }
}