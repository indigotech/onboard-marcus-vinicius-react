import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./routes";
import { ApolloProvider, ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter } from "react-router-dom";

const httpLink = new HttpLink({ uri: "https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql" })

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("user-session-token");
  return {
    headers: {
      ...headers,
      authorization: token ? ` ${token}` : ""
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(
  document.querySelector(".root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

