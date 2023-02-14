import { BrowserRouter,Route,Routes } from "react-router-dom";
import About from "../page/About";
import Body from "../page/Body";
const Router=()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body/>}/>
                <Route path="/:id"element={<About/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router