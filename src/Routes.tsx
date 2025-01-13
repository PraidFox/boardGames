import {Route, Routes} from "react-router";
import {AllContextProvider} from "./context/AllContextProvider.tsx";
import {App} from "./App.tsx";
import ErrorPage from "./components/Structure/Pages/ErrorPage.tsx";
import {StartPage} from "./components/Structure/Pages/StartPage.tsx";
import {ArticlesPage} from "./components/Structure/Pages/ArticlesPage.tsx";
import {SettingProfilePage} from "./components/Structure/Pages/SettingProfilePage.tsx";
import {CurrentBoardGamePage} from "./components/Structure/Pages/CurrentBoardGamePage.tsx";
import {RatingBoardGamesPage} from "./components/Structure/Pages/RatingBoardGamesPage.tsx";
import {EventsPage} from "./components/Structure/Pages/EventsPage.tsx";
import {AllUsersPage} from "./components/Structure/Pages/AllUsersPage.tsx";
import {UserProfilePage} from "./components/Structure/Pages/UserProfilePage.tsx";
import {PrivateRouter} from "./components/PrivateRouter.tsx";
import {AdminSettingPage} from "./components/Structure/Pages/AdminSetting.page.tsx";
import {
    UserCollectionsBoardGames
} from "./components/Structure/Pages/CollectionsGamesPage/PanelCollectionsGamePage/UserCollectionsBoardGames.tsx";
import {FriendsPage} from "./components/Structure/Pages/FriendsPage.tsx";
import {VK} from "./components/Structure/Pages/VK.tsx";
import {PathStorage} from "./tools/storages/Path.storage.ts";
import {AllBoardGamesPage} from "./components/Structure/Pages/AllBoardGamesPage.tsx";


export const AppRoutes = () => {
    return (
        <Routes>
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

                    <Route
                        path={PathStorage.COLLECTIONS + `/:userName/:collectionAlias`}
                        element={<UserCollectionsBoardGames/>}
                    >
                        {/*<Route*/}
                        {/*    path={`:collectionAlias`}*/}
                        {/*    element={<CollectionsGamesPage/>}*/}
                        {/*/>*/}
                    </Route>

                    <Route element={<PrivateRouter/>}>
                        <Route
                            path={PathStorage.ADMIN_SETTING}
                            element={<AdminSettingPage/>}
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
        </Routes>
    )
}