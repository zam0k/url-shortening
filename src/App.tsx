import React from "react";

import Banner from "./components/Banner/banner";
import Header from "./components/Header/header";
import './global.scss';

function App() {
    return (
        <>
            <Header/>
            <main>
                <Banner/>
            </main>
        </>
    );
}

export default App;
