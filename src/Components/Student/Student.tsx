import Badge from "react-bootstrap/Badge";
import ListGroup from "react-bootstrap/ListGroup";

function Student({ studentData }: { studentData: any }) {
  return (
    <ListGroup.Item
      as="li"
      className="d-flex justify-content-between align-items-start"
    >
      <div className="ms-2 me-auto">
        <div className="fw-bold">
          {studentData.firstName} {studentData.lastName}
        </div>
      </div>
      <Badge bg="secondary" pill>
        {studentData.age}{" "}
      </Badge>
    </ListGroup.Item>
  );
}

export default Student;
