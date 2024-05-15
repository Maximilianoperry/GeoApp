import React, { useEffect } from "react";
import { Navbar } from "./Navbar";
import { useSelector } from "react-redux";

import ReactGA from "react-ga";
import { withRouter } from "react-router-dom";

const Home = ({ children }) => {
    const isNavbarVisible = useSelector((state) => state.layout.navbar);

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    });

    return (
        <>
            <div className="wrapper">
                <Navbar />

                <div id="content" className={!isNavbarVisible ? "active" : ""}>
                    {process.env.NODE_ENV === "production" && <div className="user-notification">
                    </div>}

                    {children}
                </div>
                <Navbar />
            </div>

        </>
    );
};

export default withRouter(Home);
