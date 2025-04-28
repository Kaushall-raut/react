import { NavLink } from "react-router";
import "./AppLayout.css";
export const Header = () => {
  return (
    <div>
      <header>
        <section className="Nav-section">
          <nav>
            <div className="Web-name">
              <h1>F2Watch</h1>
              <div className="Links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">about</NavLink>
                <NavLink to="contact">Contact</NavLink>
                <NavLink to="SignUp">SignUp</NavLink>
                <NavLink to="SignIn">SignIn</NavLink>
              </div>
            </div>
          </nav>
        </section>
      </header>
    </div>
  );
};
