import axios from 'axios'

const Images = {
  getAll: _ => axios.get('/images'),
  getOne: userId => axios.get(`/images/${userId}`),
  postOne: image => axios.post('/images', image),
  putOne: (id, image) => axios.put(`/images/${id}`, image),
  deleteOne: id => axios.delete(`/images/${id}`)
}

export default Users