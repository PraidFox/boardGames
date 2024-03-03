import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {App} from "./App";
import './index.css';
import {AllBoardGames} from "./components/Structure/Pages/AllBoardGames";
import ErrorPage from "./components/Structure/Pages/ErrorPage";
import {AdminSetting} from "./components/Structure/Pages/AdminSetting";
import {CurrentBoardGame} from "./components/Structure/Pages/CurrentBoardGame";
import {VK} from "./components/Structure/Pages/VK";

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
                    element={<AllBoardGames type={"all"}/>}
                />
                <Route
                    path="boardGame/:boardGameId"
                    element={<CurrentBoardGame/>}
                />
                <Route
                    path="projectSetting"
                    element={<AdminSetting/>}
                />
                <Route
                    path="myCollections"
                    element={<AllBoardGames type={"user"}/>}
                />
                <Route
                    path="VK"
                    element={<VK/>}
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
