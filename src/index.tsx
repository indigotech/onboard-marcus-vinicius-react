import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./routes";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";

const client = new ApolloClient({
  uri: "https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql",
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

