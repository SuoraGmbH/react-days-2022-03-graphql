import React from "react";
import ReactDOM from "react-dom";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import configureApollo from "./configureApollo";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

dayjs.extend(localizedFormat);

const apolloClient = configureApollo();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={apolloClient}>
        <App />
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
