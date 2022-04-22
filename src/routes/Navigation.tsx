import {
  BrowserRouter,
  Navigate,
  NavLink,
  Route,
  Routes,
} from "react-router-dom";
import logo from "../logo.svg";
import { LazyPage, LazyPage1, LazyPage2 } from "../lazyLoad/pages/";

export const Navigation = () => {
  return (
    <>
      <BrowserRouter>
        <div className="main-layout">
          <nav>
            <img src={logo} alt="React logo"></img>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Lazy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Lazy1
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/users"
                  className={({ isActive }) => (isActive ? "nav-active" : "")}
                >
                  Lazy2
                </NavLink>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="home" element={<LazyPage></LazyPage>}></Route>
            <Route path="about" element={<LazyPage1></LazyPage1>}></Route>
            <Route path="users" element={<LazyPage2></LazyPage2>}></Route>
            <Route path="/*" element={<Navigate to="/home" replace />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};
