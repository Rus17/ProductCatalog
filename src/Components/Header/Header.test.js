import {BrowserRouter} from "react-router-dom"
import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import Header from "./Header";

let container = null;
beforeEach(() => {
   container = document.createElement("div");
   document.body.appendChild(container);
});

afterEach(() => {
   unmountComponentAtNode(container);
   container.remove();
   container = null;
});

it("renders without token", () => {

   act(() => {
      render(<BrowserRouter><Header token=""/></BrowserRouter>, container);
   });
   expect(container.textContent).toBe("You are not authorized!Login");

   act(() => {
      render(<BrowserRouter><Header token=""/></BrowserRouter>, container);
   });
   expect(container.textContent).not.toBe("Glad to see you again!Logout");

});


it("renders with a token", () => {


   act(() => {
      render(<BrowserRouter><Header token="1"/></BrowserRouter>, container);
   });
   expect(container.textContent).toBe("Glad to see you again!Logout");

   act(() => {
      render(<BrowserRouter><Header token="1"/></BrowserRouter>, container);
   });
   expect(container.textContent).not.toBe("You are not authorized!Login");


});
