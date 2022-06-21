import { BrowserRouter, Routes, Route} from "react-router-dom";
import Allemployers from "./pages/allemployers/allemployers";
import Companies from "./pages/companies/companies";
import Employer from "./pages/employer/employer";
import Home from "./pages/home/home";




export default function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="companies" element={<Companies />} />
                <Route path="employer" element={<Employer />} />
                <Route path="employer/:company" element={<Allemployers />} />
            </Routes>
        </BrowserRouter>
    )
}