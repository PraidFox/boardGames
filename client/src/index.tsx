import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {App} from "./App";
import './index.css';
import {BoardGames} from "./components/Structure/Content/BoardGames";
import ErrorPage from "./components/Structure/Content/ErrorPage";
import {AdminSetting} from "./components/Structure/Content/AdminSetting";
import {CurrentBoardGame} from "./components/Structure/Content/CurrentBoardGame";
import {VK} from "./components/Structure/Content/VK";

const pop = true

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
                    element={<BoardGames type={"all"}/>}
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
                    element={<BoardGames type={"user"}/>}
                />
                <Route
                    path="VK"
                    element={pop ? <VK/> : <BoardGames type={"all"}/>}
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
