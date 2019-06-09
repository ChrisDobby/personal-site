import React from "react";

import Footer from "./Footer";
import profile from "../assets/images/profile.jpg";

export default () => (
    <header id="header">
        <div className="inner">
            <div className="image avatar">
                <img src={profile} alt="" />
            </div>
            <h1>
                Proud Dad
                <br />
                average cricketer
                <br />
                software developer
                <br />
                Pluralsight guide author
            </h1>
        </div>
        <Footer />
    </header>
);
