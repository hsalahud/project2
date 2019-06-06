import axios from 'axios'

const Timelog = {
  getAll: userId => axios.get(`/timelog/${userId}`),
  postOne: hours => axios.post('/timelog', hours),
  putOne: (id, hours) => axios.put(`/timelog/${id}`, hours),
  deleteOne: id => axios.delete(`/timelog/${id}`)
}

export default Timelog
