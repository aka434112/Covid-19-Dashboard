import axios from 'axios'

const covidInfoClient = axios.create({
  baseURL: process.env.VUE_APP_COVID_BASE_URL,
  headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
  }
})

export default {
  fetchDistrictWiseDatav2: () => covidInfoClient.get('/v2/state_district_wise.json'),
  fetchDistrictWiseData: () => covidInfoClient.get('/state_district_wise.json'),
  fetchStateWiseData: () => covidInfoClient.get('/data.json')
}
