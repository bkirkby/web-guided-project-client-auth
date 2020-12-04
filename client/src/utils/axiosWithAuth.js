import axios from 'axios';

const axiosWithAuth = () => {
  return axios.create({
    headers: {
      Authorization: ''//???
    }
  })
}

export default axiosWithAuth