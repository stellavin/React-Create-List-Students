import ListGroup from "react-bootstrap/ListGroup";
import Student from "../Student/Student";

function StudentList({ allStudents }: { allStudents: any }) {
  return (
    <ListGroup as="ol" numbered>
      {allStudents.map((student: any, i: any) => {
        return <Student key={i} studentData={student} />;
      })}
    </ListGroup>
  );
}

export default StudentList;
