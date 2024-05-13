import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../login/index.tsx";

export function Router() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
            </Routes>
        </BrowserRouter>

    )

}