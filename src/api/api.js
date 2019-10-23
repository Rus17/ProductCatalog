import * as axios from "axios"

export const server = "http://smktesting.herokuapp.com/"

export const getProductListAPI = () => {
   return axios.get(`${server}api/products`)
}


export const getProductCommentsAPI = (id) => {
   return axios.get(`${server}api/reviews/${id}`)
}
