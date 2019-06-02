import axios from 'axios'

const Timelog = {
  getAll: _ => axios.get('/timelog'),
  postOne: student => axios.post('/timelog', hours),
  putOne: (id, student) => axios.put(`/timelog/${id}`, hours),
  deleteOne: id => axios.delete(`/timelog/${id}`)
}

export default Timelog
