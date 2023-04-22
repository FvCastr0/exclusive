import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Navigation from "./components/screenComponent/Navigation";

export default function AppRoutes() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route index path="/" element={<Home />} />
            </Routes>
        </BrowserRouter>
    )
} 