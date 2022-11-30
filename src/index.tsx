import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react";
import * as ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { BaseLayout } from "./components/layouts";
import { GameSearch, Login, Register } from "./components/pages";
import reportWebVitals from "./reportWebVitals";
import * as serviceWorker from "./serviceWorker";
import { store } from "./state/store";
import "@fontsource/aldrich";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <ColorModeScript />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<BaseLayout />}>
            <Route index element={<App />} />
            <Route path="/games/search" element={<GameSearch />} />
          </Route>
        </Routes>
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
