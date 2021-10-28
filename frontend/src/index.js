import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheets/style.css";

import HomePage from "./Components/Pages/HomePage";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";

// Improve the header with dynamic HTML generation
Header();

/// Improve the navbar : deal with the click events on navbar items
Navbar();

// call the asynchrone function to print the list of pizzas
HomePage();

// Improve the header with dynamic HTML generation
Footer();