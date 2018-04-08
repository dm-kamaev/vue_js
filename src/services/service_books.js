import axios from 'axios';

const service_books = {};

service_books.get_all = async function (u_id) {
  return axios.get('/api/books/'+u_id).then((res) => {
    let data = res.data;
    return data.data || [];
  }).catch(err => {
    console.error(err);
  });
};


service_books.update = function (u_id, books) {
  return axios.post('/api/books/'+u_id, books).then((res) => {
    let data = res.data;
    if (!data.ok) {
      throw data;
    }
  }).catch(err => {
    console.error(err);
  });
};


export default service_books;
