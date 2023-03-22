import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import DropDown from "../Components/DropDown/DropDown";
import ButtonComponent from "../Components/Elements/Button";
import { Link } from "react-router-dom";
import StudentList from "../Components/StudentList/StudentList";
import {
  getStudentsByNationality,
  getAllNationalities,
} from "../Store/Reducers/StudentReducer";

const StudentView = () => {
  const [selected, setSelected] = useState("");
  const dispatch = useDispatch<any>();
  const [sort, setSort] = useState(false);

  const Nationalities = useSelector(
    (state: any) => state["student"].nationalities
  );

  const [students, setStudents] = useState(
    useSelector((state: any) => state["student"].data)
  );

  useEffect(() => {
    try {
      if (selected === "" || selected === undefined) {
        setSelected(Nationalities[0]);
      } else {
        const response = dispatch(
          getStudentsByNationality({ nationality: selected })
        );

        response
          .then((res: any) => {
            setStudents(res.payload["data"]["students"]);
          })
          .catch((err: any) => {});
      }
    } catch (error) {}
  }, [selected, Nationalities]);

  const handleOnClick = () => {
    let data: any = students;
    let res;
    if (sort) {
      res = data
        .slice()
        .sort((a: any, b: any) =>
          a.firstName.toUpperCase() > b.firstName.toUpperCase() ? 1 : -1
        );
      setSort(false);
    } else {
      res = data
        .slice()
        .sort((a: any, b: any) =>
          a.firstName.toUpperCase() > b.firstName.toUpperCase() ? -1 : 1
        );
      setSort(true);
    }
    setStudents(res);
  };

  return (
    <>
      <Container>
        <Row>
          <Col>
            <DropDown Nationalities={Nationalities} setSelected={setSelected} />
          </Col>
          <Col xs={2}>
            <Link to={"/new"}>
              <Button variant="secondary">Add Student</Button>
            </Link>
          </Col>
        </Row>
      </Container>
      <StudentList allStudents={students} />
      <br></br>
      <ButtonComponent
        handleOnClick={() => handleOnClick()}
        name="Sort"
        color="warning"
      />
    </>
  );
};
export default StudentView;
