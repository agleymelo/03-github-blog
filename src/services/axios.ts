import axios from 'axios'

export const api = await axios.create({
  baseURL: 'https://api.github.com',
})
