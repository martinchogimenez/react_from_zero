import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import {createRoot} from "react-dom/client"
import { ChakraProvider } from "@chakra-ui/react";

import { App } from "./App";


// Get the container element where you want to render your component
const container = document.getElementById('root');

// Create the root object using the container element
const root = createRoot(container);

root.render(
  <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
  </React.StrictMode>,
);