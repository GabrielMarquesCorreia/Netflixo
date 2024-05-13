import { BrowserRouter, Route, Routes } from "react-router-dom";
import Games from "../games";
import Login from "../login";
import News from "../news";
import Profile from "../profile";
import Search from "../search";

export function Router() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile/:userId" element={<Profile />} />
                <Route path="/news" element={<News />} />
                <Route path="/games" element={<Games />} />
                <Route path="/search" element={<Search />} />
            </Routes>
        </BrowserRouter>

    )

}