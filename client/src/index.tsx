import React from 'react';
import ReactDOM from 'react-dom/client';
import {MainScreen} from "./components/MainScreen/MainScreen";


ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    // <React.StrictMode>
    <MainScreen/>
    // </React.StrictMode>
);
