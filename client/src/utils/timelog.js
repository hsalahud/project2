import axios from 'axios'

const Timelog = {
  getAll: _ => axios.get('/timelog'),
  postOne: hours => axios.post('/timelog', hours),
  putOne: (id, hours) => axios.put(`/timelog/${id}`, hours),
  deleteOne: id => axios.delete(`/timelog/${id}`)
}

export default Timelog
