// import React from "react";
// import ReactDOM from "react-dom";
// import './index.css'
// import App from './App'


// ReactDOM.render(<App />, document.getElementById("root"))

import axios from "axios";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";


import App from './containers/App'
import { ThemeProvider } from "./context";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type'] = 'application/json';

axios.interceptors.request.use(request => {
  // console.log("request", request);
  return request;
}, error => {
  console.log("Erroe====>", error);
  return Promise.reject(error)
})
axios.interceptors.response.use(response => {
  // console.log("response", response);
  return response;
}, error => {
  // console.log("Erroe====>", error);
  return Promise.reject(error)
})

root.render(
  // <StrictMode>
  // <Provider store={store}>
  //   <App appTitle="Person Manager" />
  //   </Provider>
  // </StrictMode>
  <StrictMode>
    <ThemeProvider>
      <App appTitle="Person Manager" />
    </ThemeProvider>
  </StrictMode>
);
