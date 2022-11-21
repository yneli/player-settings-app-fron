
import { Layout } from "../components/Layout/Layout";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Games } from "../components/Games/Games";
import { SensCalc } from "../components/SensCalc/SensCalc";
import { Route, Routes } from "react-router-dom";
import { AboutGame } from "../components/AboutGame/AboutGame";
import { AboutPlayer } from "../components/AboutPlayer/AboutPlayer";

export const Sheet = () => {
    return <>
        <Layout header={<Header/>}>
            <Sidebar/>
            <Routes> 
                <Route path="/" element={<Games/>}/>
                <Route path="//:id" element={<AboutGame/>}/>
                <Route path="/sensitivity" element={<SensCalc/>}/>
                <Route path="//:id/:id" element={<AboutPlayer/>}/>
            </Routes>
        </Layout>
    </>;
};
{/* <Routes> 
<Route path="/" element={<Games/>}/>
<Route path="//:id" element={<Games/>}/>
<Route path="/sensitivity" element={<SensCalc/>}/>
</Routes> */}