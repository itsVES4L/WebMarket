import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App";
import "./index.css";

//Route
import { BrowserRouter } from "react-router-dom";

//redux
import store from "./app/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
<BrowserRouter>
<Provider store={store}>
<App />
</Provider>
</BrowserRouter>

);
