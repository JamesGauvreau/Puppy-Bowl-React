import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <br></br>
      <br></br>
      <Link to="/LeFormDePup">Add Doggo</Link>
      <br></br>
      <br></br>
    </nav>
  );
};

export default NavBar;