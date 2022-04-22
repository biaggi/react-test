import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";

import { routes } from "./routes";
import { Suspense } from "react";

export const Navigation = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo"></img>
            <ul>
              {routes.map((route) => (
                <li>
                  <NavLink
                    key={route.key}
                    to={route.to}
                    className={({ isActive }) => (isActive ? "nav-active" : "")}
                  >
                    {route.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <Routes>
            {routes.map(({ key, path, Component }) => (
              <Route key={key} path={path} element={<Component />}></Route>
            ))}
            <Route
              path="/*"
              element={<Navigate to={routes[0].to} replace />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Suspense>
  );
};
