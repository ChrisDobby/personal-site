import React from "react";
import "../assets/scss/main.scss";

import Header from "./Header";

export default props => {
    const { children } = props;

    return (
        <div>
            <Header />
            {children}
        </div>
    );
};
