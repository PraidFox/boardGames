import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import {App} from "./App";
import {AllBoardGamesPage} from "./components/Structure/Pages/AllBoardGamesPage";
import ErrorPage from "./components/Structure/Pages/ErrorPage";
import {CurrentBoardGamePage} from "./components/Structure/Pages/CurrentBoardGamePage";
import {VK} from "./components/Structure/Pages/VK";
import {PrivateRouter} from "./components/PrivateRouter";
import {AdminSettingPage} from "./components/Structure/Pages/AdminSettingPage";
import {AllContextProvider} from "./context/AllContextProvider";
import {FriendsPage} from "./components/Structure/Pages/FriendsPage";
import {AllUsersPage} from "./components/Structure/Pages/AllUsersPage";
import {ArticlesPage} from "./components/Structure/Pages/ArticlesPage";
import {SettingProfilePage} from "./components/Structure/Pages/SettingProfilePage";
import {PathStorage} from "./tools/storages/const";
import {RatingBoardGamesPage} from "./components/Structure/Pages/RatingBoardGamesPage";
import {EventsPage} from "./components/Structure/Pages/EventsPage";
import {StartPage} from "./components/Structure/Pages/StartPage";
import {MyCollectionsBoardGames} from "./components/Structure/Pages/MyCollectionsBoardGames";
import {UserProfilePage} from "./components/Structure/Pages/UserProfilePage";
import {CollectionGamesPage} from "./components/Structure/Pages/CollectionGamesPage/CollectionGamesPage";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={
                <AllContextProvider>
                    <App/>
                </AllContextProvider>
            }
            errorElement={<ErrorPage/>}
        >
            <Route>
                <Route index element={<StartPage/>}/>

                <Route
                    path={PathStorage.LEFT_BOARD_GAMES + PathStorage.ALL_BOARD_GAMES}
                    element={<AllBoardGamesPage/>}
                />

                <Route
                    path={PathStorage.ARTICLES}
                    element={<ArticlesPage/>}
                />
                <Route
                    path={PathStorage.MY_SETTING}
                    element={<SettingProfilePage/>}
                />
                <Route
                    path={PathStorage.BOARD_GAME + `/:boardGameId`}
                    element={<CurrentBoardGamePage/>}
                />
                <Route
                    path={PathStorage.RATING_BOARD_GAMES}
                    element={<RatingBoardGamesPage/>}
                />
                <Route
                    path={PathStorage.EVENTS}
                    element={<EventsPage/>}
                />

                <Route
                    path={PathStorage.USERS}
                    element={<AllUsersPage/>}
                />
                <Route
                    path={PathStorage.USERS + `/:userName`}
                    element={<UserProfilePage/>}
                />

                <Route element={<PrivateRouter/>}>
                    <Route
                        path={PathStorage.ADMIN_SETTING}
                        element={<AdminSettingPage/>}
                    />
                    <Route
                        path={PathStorage.MY_COLLECTIONS}
                        element={<MyCollectionsBoardGames/>}
                    />
                    <Route
                        path={PathStorage.MY_COLLECTIONS + `/:collectionId`}
                        element={<CollectionGamesPage/>}
                    />
                    <Route
                        path={PathStorage.MY_FRIENDS}
                        element={<FriendsPage/>}
                    />
                </Route>

                <Route
                    path={PathStorage.VK}
                    element={<VK/>}
                />
            </Route>
        </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
    .render(
        <RouterProvider router={router}/>
    );
