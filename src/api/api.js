import * as axios from "axios"

export const server = "http://smktesting.herokuapp.com/"

// ------------------------- Get Product List -------------------------
export const getProductListAPI = () => {
   return axios.get(`${server}api/products`)
}

// ------------------------- Get Comments -------------------------
export const getProductCommentsAPI = (id) => {
   return axios.get(`${server}api/reviews/${id}`)
}

// ------------------------- Registration -------------------------
export const registrationAPI = (data) => {
   let dataJSON = JSON.stringify(data)
   return axios.post(`${server}api/register/`, dataJSON, {
      headers: { 'content-type': 'application/json' }
   })
}

// ------------------------- Authorization -------------------------
export const authorizationAPI = (data) => {
   let dataJSON = JSON.stringify(data)
   return axios.post(`${server}api/login/`, dataJSON, {
      headers: { 'content-type': 'application/json' }
   })
}