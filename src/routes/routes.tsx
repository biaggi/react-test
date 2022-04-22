import { lazy, Component, LazyExoticComponent } from "react";
type JSXComponent = () => JSX.Element;
interface Route {
  key: string;
  to: string;
  path: string;
  Component: JSXComponent | LazyExoticComponent<JSXComponent>;
  name: string;
}

const Lazy = lazy(() => import("../lazyLoad/pages/LazyPage"));
const Lazy1 = lazy(() => import("../lazyLoad/pages/LazyPage1"));
const Lazy2 = lazy(() => import("../lazyLoad/pages/LazyPage2"));

export const routes: Route[] = [
  {
    key: Math.ceil(Math.random() * 10000000) + "",
    to: "/lazy",
    path: "/lazy",
    Component: Lazy,
    name: "Lazy-",
  },
  {
    key: Math.ceil(Math.random() * 10000000) + "",
    to: "/lazy1",
    path: "/lazy1",
    Component: Lazy1,
    name: "Lazy-1",
  },
  {
    key: Math.ceil(Math.random() * 10000000) + "",
    to: "/lazy2",
    path: "/lazy2",
    Component: Lazy2,
    name: "Lazy-2",
  },
];
