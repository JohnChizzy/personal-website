import React from "react";
import Header from "./Header";
import  Intro from "./Intro";
import  Skills from "./Skills";
import Footer from "./Footer";
import Socials from "./Socials";

const { PUBLIC_URL } = process.env;

function App (){
    return(
        <div>
            <Header/>
            <div id="content">
                <Intro/>
                <Skills/>
                <Socials/>
            </div>
            <Footer/>
        </div>
    );
}

export default App;

