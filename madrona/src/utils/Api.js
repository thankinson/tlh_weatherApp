import axios from 'axios';
const { REACT_APP_API_URL, REACT_APP_API_KEY } = process.env

export default class SearchLocation {
  constructor(search){
    this.search = search
  }
  async LocationSearch(){
      console.log('API hit')
      console.log('Eviroment variables ', REACT_APP_API_KEY, REACT_APP_API_URL)
      console.log(this.search)
      const response = await fetch(`${this.search}`)
      const data = await response.json()
      console.log(data)
      return data
  }
}
