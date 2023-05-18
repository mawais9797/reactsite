import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
const Home = lazy(() => import("./components/Home"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Services = lazy(() => import("./components/Services"));
const Countries = lazy(() => import("./components/Countries"));
const Dashboard = lazy(() => import("./components/Dashboard"));
const SignupForm = lazy(() => import("./components/SignupForm"));
const Login = lazy(() => import("./components/Login"));
const Hooks = lazy(() => import("./components/Hooks"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          {/* <Route path="/countries" element={<Countries />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/signup" element={<SignupForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/hooks" element={<Hooks />} />
          {/* <Route path="/countires" element={<Countires />} /> */}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
