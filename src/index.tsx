import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { App } from "./app";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql",
  cache: new InMemoryCache()
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
]);

const root = ReactDOM.createRoot(
  document.querySelector(".root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);

