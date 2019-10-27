import productListReducer, {getProductListAC} from "./productListReducer"

 // 1. test data
let action = getProductListAC(
   [{
      id: 1,
      img: "camera.jpg",
      text: "new camera",
      title: "camera"
   }] 
)   

it('The length of the product array should be incremented', () => {
   // 1. test data
   let state = {
      productList: []
   }
   // 2. action
   let newState = productListReducer(state, action)
    // 3. expectation
   expect(newState.productList.length).toBe(1)   
})

it('The "id" field must be valid', () => {
   // 1. test data
   let state = {
      productList: []
   }   
   // 2. action
   let newState = productListReducer(state, action)
   // 3. expectation
   expect(newState.productList[0].id).toBe(1)   
})

it('The "title" field must be valid', () => {  
   // 1. test data
   let state = {
      productList: []
   }
   // 2. action
   let newState = productListReducer(state, action)
   // 3. expectation
   expect(newState.productList[0].title).toBe("camera")   
})

it('The "text" field must be valid', () => {
   // 1. test data
   let state = {
      productList: []
   }
   // 2. action
   let newState = productListReducer(state, action)
   // 3. expectation
   expect(newState.productList[0].text).toBe("new camera")   
})