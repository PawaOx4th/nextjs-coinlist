import axios from "axios"

// axios.defaults.baseURL = "https://api.coingecko.com/api/v3/coins"
// axios.defaults.headers.post["Content-Type"] = "application/json"

const services = axios.create({
  baseURL: "https://api.coingecko.com/api/v3/coins"
})

export default services
