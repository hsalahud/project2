import axios from 'axios'

const Users = {
  getAll: _ => axios.get('/users'),
  postOne: user => axios.post('/users', user),
  putOne: (id, user) => axios.put(`/users/${id}`, user),
  deleteOne: id => axios.delete(`/users/${id}`)
}

export default Students
