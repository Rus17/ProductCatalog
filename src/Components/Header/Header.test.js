import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import Header from "./Header"

let container = null
beforeEach(() => {
  // подготавливаем DOM-элемент, куда будем рендерить
  container = document.createElement("div")
  document.body.appendChild(container)
})

afterEach(() => {
  // подчищаем после завершения
  unmountComponentAtNode(container)
  container.remove()
  container = null
})









it("renders with or without a name", () => {
  act(() => {
    render(<Header token="676g67t766g796" />, container)
  })
  expect(container.textContent).toBe("Logout")
   

//  act(() => {
//    render(<AuthForm regMode="true" />, container)
//  })
//  expect(container.textContent).toBe("Sign up")
   

 
})