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

// ----------------- Registration / authorization --------------------
export const authorizationAPI = (data, reg) => {   
   let regUrl = reg ? "register" : "login"
   let dataJSON = JSON.stringify(data)
   return axios.post(`${server}api/${regUrl}/`, dataJSON, {
      headers: { 'content-type': 'application/json' }
   })
}

// ------------------------- Send My Comment -------------------------
export const sendMyCommentAPI = (data, id, token) => {
   let dataJSON = JSON.stringify(data)
   return axios.post(`${server}api/reviews/${id}`, dataJSON, {
      headers: {
        'content-type': 'application/json',
        'Authorization': `Token ${token}`
      }
   })
}
