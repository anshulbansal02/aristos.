import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";
import router from "./views/router";

import "./styles/global.scss";

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router}></RouterProvider>
        </Provider>
    );
}

export default App;
