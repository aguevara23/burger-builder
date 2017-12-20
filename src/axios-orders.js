import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://react-burger-b585d.firebaseio.com/'
})

export default instance;
