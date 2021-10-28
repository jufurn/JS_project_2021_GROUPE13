import { Navbar as BootstrapNavbar } from "bootstrap";
import HomePage from "../Pages/HomePage";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

const Navbar = () => {
  const navItems = document.querySelectorAll(".nav-link");

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      // stop default action of a link
      e.preventDefault();
      console.log(`click on ${e.target.innerHTML} navbar item`);
      if (e.target.innerHTML === "Home") {
        HomePage();
      } else if (e.target.innerHTML === "Login") {
        LoginPage();
      } else if (e.target.innerHTML === "Register") {
        RegisterPage();
      }
    });
  });
};

export default Navbar;
