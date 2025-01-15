import {Route, Routes} from "react-router";
import {AllContextProvider} from "./context/AllContextProvider.tsx";
import {App} from "./App.tsx";
import ErrorPage from "./components/Structure/Pages/ErrorPage.tsx";
import {StartPage} from "./components/Structure/Pages/StartPage.tsx";
import {ArticlesPage} from "./components/Structure/Pages/ArticlesPage.tsx";
import {CurrentBoardGamePage} from "./components/Structure/Pages/CurrentBoardGamePage.tsx";
import {RatingBoardGamesPage} from "./components/Structure/Pages/RatingBoardGamesPage.tsx";
import {EventsPage} from "./components/Structure/Pages/EventsPage.tsx";
import {AllUsersPage} from "./components/Structure/Pages/AllUsersPage.tsx";
import {PrivateRouter} from "./components/PrivateRouter.tsx";
import {AdminSettingPage} from "./components/Structure/Pages/AdminSetting.page.tsx";
import {VK} from "./components/Structure/Pages/VK.tsx";
import {PathStorage} from "./tools/storages/Path.storage.ts";
import {AllBoardGamesPage} from "./components/Structure/Pages/AllBoardGamesPage.tsx";
import {UserProfilePage} from "./components/Structure/Pages/UserProfilePage.tsx";
import {
    UserCollectionsBoardGames
} from "./components/Structure/Pages/CollectionsGamesPage/PanelCollectionsGamePage/UserCollectionsBoardGames.tsx";
import {FriendsPage} from "./components/Structure/Pages/FriendsPage.tsx";
import {SettingProfilePage} from "./components/Structure/Pages/SettingProfilePage.tsx";


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
                        path={PathStorage.BOARD_GAMES}
                        element={<AllBoardGamesPage/>}
                    />

                    <Route
                        path={PathStorage.ARTICLES}
                        element={<ArticlesPage/>}
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
                        path={PathStorage.USER + `/:userName`}
                    >
                        <Route
                            path={PathStorage.PROFILE}
                            element={<UserProfilePage/>}
                        />
                        <Route
                            path={PathStorage.COLLECTIONS + `/:collectionAlias`}
                            element={<UserCollectionsBoardGames/>}
                        />
                        <Route
                            path={PathStorage.FRIENDS}
                            element={<FriendsPage/>}
                        />
                        <Route
                            path={PathStorage.MY_SETTING}
                            element={<SettingProfilePage/>}
                        />
                    </Route>

                    <Route path={PathStorage.USER + `/:userName`}>
                        <Route path={'profile'} element={<UserProfilePage/>}>

                        </Route>
                    </Route>
                    
                    <Route element={<PrivateRouter/>}>
                        <Route
                            path={PathStorage.ADMIN_SETTING}
                            element={<AdminSettingPage/>}
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