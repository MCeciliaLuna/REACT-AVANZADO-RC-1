import { MenuItem } from "./MenuItem";
import { MenuData } from "../../data/Menu";

export const Navbar = ({loggedOnCLick}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <MenuItem menuData={MenuData} />
          <button className="btn btn-primary" type="submit" onClick={loggedOnCLick}>
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};
