import {Outlet, Route, Routes} from "react-router";
import {App} from "./App.tsx";
import ErrorPage from "./components/Structure/Pages/ErrorPage.tsx";
import {StartPage} from "./components/Structure/Pages/StartPage.tsx";
import {ArticlesPage} from "./components/Structure/Pages/ArticlesPage.tsx";
import {RatingBoardGamesPage} from "./components/Structure/Pages/RatingBoardGamesPage.tsx";
import {EventsPage} from "./components/Structure/Pages/EventsPage.tsx";
import {AllUsersPage} from "./components/Structure/Pages/AllUsersPage.tsx";
import {PrivateRouter} from "./components/PrivateRouter.tsx";
import {AdminSettingPage} from "./components/Structure/Pages/AdminSetting/AdminSetting.page.tsx";
import {PathStorage} from "./tools/storages/Path.storage.ts";
import {UserProfilePage} from "./components/Structure/Pages/UserProfilePage.tsx";
import {FriendsPage} from "./components/Structure/Pages/FriendsPage.tsx";
import {
    UserCollectionsBoardGamesPage
} from "./components/Structure/Pages/CollectionsGamesPage/UserCollectionsBoardGames.page.tsx";
import {AllBoardGamesPage} from "./components/Structure/Pages/AllBoardGamesPage.tsx";
import {ContentLayout} from "./components/Structure/ContentLayout.tsx";
import {CurrentBoardGamePage} from "./components/Structure/Pages/CurrentBoardGamePage.tsx";
import {SettingProfilePage} from "./components/Structure/Pages/SettingProfilePage.tsx";
import {NotificationsPage} from "./components/Structure/Pages/Notifications.page.tsx";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<App/>}
                errorElement={<ErrorPage/>}
            >
                <Route element={<ContentLayout/>}>
                    <Route path={PathStorage.WELCOME} element={<StartPage/>}/>

                    <Route path={PathStorage.BOARD_GAMES}>
                        <Route index element={<AllBoardGamesPage/>}/>
                        <Route
                            path={PathStorage.BOARD_GAME}
                            element={<div>Укажите игру которую хотите увидеть <Outlet/></div>}
                        />
                        <Route
                            path={PathStorage.BOARD_GAME + `/:boardGameId`}
                            element={<CurrentBoardGamePage/>}
                        />
                    </Route>

                    <Route
                        path={PathStorage.ARTICLES}
                        element={<ArticlesPage/>}
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
                    >
                        <Route index element={<AllUsersPage/>}></Route>
                        <Route
                            path={PathStorage.USER}
                            element={<div>Какой же тебе нужен юзер?</div>}
                        />
                        <Route
                            path={PathStorage.USER + `/:userName`}
                        >
                            <Route index element={<UserProfilePage/>} />
                            <Route
                                path={PathStorage.COLLECTIONS_USER}
                                element={<UserCollectionsBoardGamesPage/>}
                            >
                                <Route path={`:collectionAlias`}/>
                            </Route>

                            <Route
                                path={PathStorage.FRIENDS}
                                element={<FriendsPage/>}
                            />
                        </Route>
                    </Route>


                    <Route element={<PrivateRouter/>}>
                        <Route
                            path={PathStorage.MY_SETTING}
                            element={<SettingProfilePage/>}
                        />
                        <Route
                            path={PathStorage.ADMIN_SETTING}
                            element={<AdminSettingPage/>}
                        />
                        <Route
                            path={PathStorage.NOTIFICATION}
                            element={<NotificationsPage/>}
                        />
                    </Route>
                </Route>
            </Route>
        </Routes>
    )
}