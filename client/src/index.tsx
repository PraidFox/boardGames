import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {MainScreen} from "./components/MainScreen/MainScreen";
import './index.css';
import {UserLogin} from "./utils/interface/otherInterface";
import {AllGameBoard} from "./components/Content/AllGameBoard";
import ErrorPage from "./components/Content/ErrorPage";
import {AdminSetting} from "./components/Content/AdminSetting";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<MainScreen/>}
            errorElement={<ErrorPage/>}
        >
            <Route>
                <Route index/>
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
