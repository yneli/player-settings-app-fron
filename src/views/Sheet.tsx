import { Layout } from "../components/Layout/Layout";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Games } from "../components/Games/Games";
import { SensCalc } from "../components/SensCalc/SensCalc";
import { Route, Routes } from "react-router-dom";

export const Sheet = () => {
    return <>
        <Layout header={<Header/>}>
            <Sidebar/>
            <Routes> 
                <Route path="/" element={<Games/>}/>
                <Route path="/sensitivity" element={<SensCalc/>}/>
            </Routes>
        </Layout>
    </>;
};