import axios from 'axios'

export function getMessage() {
  return axios.get('http://localhost:3000/message').then(response => {
    return response.data
  })
}

/* 
For the MesageDisplay component instead of using a full backend we're using a db.json which gives us a fake REST API.
This API service layer, which will handle the actual API calls.
*/
