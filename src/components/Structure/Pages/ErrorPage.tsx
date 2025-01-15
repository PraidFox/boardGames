import {useRouteError} from "react-router";

interface RouteError {
    statusText: string;
    message: string;
}

export default function ErrorPage() {
    const error = useRouteError() as RouteError;
    console.error(error);

    return (
        <div id="error-page" style={{textAlign: "center"}}>
            <h1>Упс!</h1>
            <p>Кажется для этого пути еще нет страницы</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    );
}