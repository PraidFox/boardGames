import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {MainScreen} from "./components/MainScreen/MainScreen";
import './index.css';
import {UserLogin} from "./utils/interface/otherInterface";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainScreen/>}/>
    )
)



ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    );
