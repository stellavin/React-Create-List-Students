import Card from "react-bootstrap/Card";
import AddForm from "../Components/Form/AddForm";
import * as Icon from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const AddStudents = () => {
  return (
    <>
      <Link
        to={"/home"}
        // onClick={() => (window.location.href = "/home")}
        className="navbar-brand"
      >
        <Icon.ArrowLeft size={25} /> Back
      </Link>
      <Card border="secondary">
        <Card.Header>Add Student</Card.Header>
        <Card.Body>
          <AddForm />
        </Card.Body>
      </Card>
    </>
  );
};

export default AddStudents;
