import axios from 'axios';

class LotsApi {
  static fetchAll(status) {
    return axios.get(`/api/lots?status=${status}`)
      .then(response => response)
      .catch(({ response }) => ({ ...response }));
  }
}

export default LotsApi;