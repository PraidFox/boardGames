import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {App} from "./App";
import './index.css';
import {UserContext} from "./tools/interfaces/otherInterface";
import {AllGameBoard} from "./components/Structure/Content/AllGameBoard";
import ErrorPage from "./components/Structure/Content/ErrorPage";
import {AdminSetting} from "./components/Structure/Content/AdminSetting";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<App/>}
            errorElement={<ErrorPage/>}
        >
            <Route>
                <Route index element={<h2>Какой-то приветствующий текст</h2>}/>
                <Route
                    path="allBoardGames"
                    element={<AllGameBoard />}
                />
                <Route
                    path="projectSetting"
                    element={<AdminSetting />}
                />
            </Route>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
        // <React.StrictMode>
            <RouterProvider router={router}/>
        // </React.StrictMode>
    );
