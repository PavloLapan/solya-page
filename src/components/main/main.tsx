import React from "react";
import Colab from "./colab";
import Reviews from "./reviews";
import Works from "./works";
import CVPage from "./cvpage";
import About from "./about";

import './main.scss'


const Main = () => {
    return (

        <div className='container-fluid p-0'>


            <About/>
            <CVPage/>
            <Works/>
            <Reviews/>
            <Colab/>
        </div>

    )

}

export default Main