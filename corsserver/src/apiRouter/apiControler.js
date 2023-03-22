// const { API_URL, API_KEY } = process.env
exports.apiSearch = async (req, res) => {
  try {
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=fb611d93a6ed406588e85145231703&q=${req.params.search}&api=no`)
      const data = await response.json()
      res.status(200).send(data)
  } catch (error) {
    console.log(error)
    res.status(500).send({err: error.message})
  }
}