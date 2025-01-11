import {createRoot} from 'react-dom/client';
import {BrowserRouter} from "react-router";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "./tools/rest/query.config.ts";
import {AppRoutes} from "./Routes.tsx";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";


createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <AppRoutes/>
            <ReactQueryDevtools/>
        </BrowserRouter>
    </QueryClientProvider>
)