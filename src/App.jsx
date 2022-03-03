import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ErrorPage from "./pages/ErrorPage";
import { Routes, Route } from "react-router-dom";
import HomePageWithRedirect from "./pages/HomePageWithRedirect";

import projectsData from './projects-data.json';     // <== IMPORT 

function App() {
  return (
    <div className="App">
      <Navbar />

    </div>
  );
}

export default App;
