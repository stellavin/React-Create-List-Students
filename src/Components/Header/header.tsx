import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";

const HeaderComponent = () => {
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <Container>
        <Link to={"/home"} className="navbar-brand">
          Students View
        </Link>
      </Container>
    </nav>
  );
};

export default HeaderComponent;
