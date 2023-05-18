import { ReactDOM } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Countries from "./components/Countries";
import List from "./components/List";
import SignupForm from "./components/SignupForm";
import Login from "./components/Login";
import Hooks from "./components/Hooks";
function App() {
  const todo = [
    { id: "1", title: "React" },
    { id: "2", title: "Node" },
  ];
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/list" element={<List todo={todo} />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hooks" element={<Hooks />} />
        {/* <Route path="/countires" element={<Countires />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
