import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navbar } from "../components/Navbar/Navbar";
import { Suspense, lazy } from "react";
import { Skills } from "../pages/Skills/Skills";
const Home = lazy(() => import("../pages/Home/Home"));
const About = lazy(() => import("../pages/About/About"));

export function MyRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          exact
          path="/about"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <About />
            </Suspense>
          }
        />
        <Route
          exact
          path="/skills"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Skills />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
}
