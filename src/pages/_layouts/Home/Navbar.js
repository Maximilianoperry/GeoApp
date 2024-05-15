import React from "react";
import { useSelector } from "react-redux";
import { Link, NavLink, useLocation } from "react-router-dom";
import routes from "routes";
import { Scrollbars } from "react-custom-scrollbars";

export const Navbar = () => {

    const isNavbarVisible = useSelector((state) => state.layout.navbar);

    const location = useLocation();

    const getNavLinkClass = (path) => {
        return location.pathname === path ? "active" : "";
    };

    return (
        <nav id="sidebar" className={!isNavbarVisible ? "active" : ""}>
            <Scrollbars style={{ width: "100%", height: "100%" }}>
                <div className="sidebar-header">
                    <h3>
                        <Link to="/">Geo Project</Link>
                    </h3>
                    <p className="mb-0 mt-2">
                        <div>
                            <a
                                class="github-button mr-3"
                                target="_blank"
                                href="https://github.com/Maximilianoperry"
                                data-size="large"
                                data-show-count="true"
                                aria-label="Star codegeous/react-component-depot on GitHub"
                            >
                                Maximilianoperry
                            </a>
                        </div>
                    </p>
                </div>

                <ul className="list-unstyled components">

                    {routes
                        .filter((route) => route.navbar !== "")
                        .map((route, index) => {
                            return route.child ? (
                                <li key={index}>
                                    <a
                                        href={`#pageSubmenu${index}`}
                                        data-toggle="collapse"
                                        aria-expanded="false"
                                        className="dropdown-toggle"
                                    >
                                        {route.navbar}
                                    </a>
                                    <ul
                                        className="collapse list-unstyled"
                                        id={`pageSubmenu${index}`}
                                    >
                                        {route.child.map((child, idx) => {
                                            return (
                                                <li
                                                    key={idx}
                                                    className={getNavLinkClass(
                                                        child.path
                                                    )}
                                                >
                                                    <NavLink
                                                        to={child.path}
                                                        activeClassName="active"
                                                    >
                                                        {child.name}
                                                    </NavLink>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </li>
                            ) : (
                                <li
                                    key={index}
                                    className={getNavLinkClass(route.path)}
                                >
                                    <Link to={route.path}>{route.navbar}</Link>
                                </li>
                            );
                        })}
                </ul>

            </Scrollbars>
        </nav>
    );
};
