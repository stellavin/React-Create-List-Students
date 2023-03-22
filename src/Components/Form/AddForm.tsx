import { useState } from "react";
import { Button, Form, Row } from "react-bootstrap";
import Input from "../Elements/Input";
import { useDispatch } from "react-redux";
import { createStudent } from "../../Store/Reducers/StudentReducer";
import AlertComponent from "../Alert/alertComponent";

type student = {
  firstName: string;
  lastName: string;
  age: number;
  nationality: string;
};

const studentData: student = {
  firstName: "",
  lastName: "",
  age: 0,
  nationality: "",
};

const AddForm = () => {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState<student>(studentData);
  const dispatch = useDispatch<any>();
  const [success, setShowSuccess] = useState(false);
  const [error, setShowError] = useState(false);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    event.stopPropagation();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      setValidated(true);
      const response = dispatch(createStudent(formData));
      response
        .then((res: any) => {
          setShowSuccess(true);
          setTimeout(function () {
            setShowSuccess(false);
            setFormData(studentData);
            setValidated(false);
          }, 2000);
        })
        .catch(function (error: any) {
          setShowSuccess(false);
          setShowError(true);
          setTimeout(function () {
            setShowError(false);
          }, 2000);
        });
    }
  };

  return (
    <>
      {success ? (
        <AlertComponent
          variant="success"
          message="Student added successfully!"
        />
      ) : (
        ""
      )}

      {error ? (
        <AlertComponent
          variant="danger"
          message="Oops!! something happened !!"
        />
      ) : (
        ""
      )}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Input
            name="First Name"
            type="text"
            controlId="validationCustom01"
            value={formData?.firstName || ""}
            onChange={(e: any) => {
              setFormData((prev) => ({ ...prev, firstName: e.target.value }));
            }}
          />
          <Input
            name="Last Name"
            type="text"
            controlId="validationCustom02"
            value={formData?.lastName || ""}
            onChange={(e: any) =>
              setFormData((prev) => ({ ...prev, lastName: e.target.value }))
            }
          />
        </Row>
        <Row className="mb-3">
          <Input
            name="Nationality"
            type="text"
            controlId="validationCustom03"
            value={formData?.nationality || ""}
            onChange={(e: any) =>
              setFormData((prev) => ({ ...prev, nationality: e.target.value }))
            }
          />
          <Input
            name="Age"
            type="number"
            controlId="validationCustom04"
            value={formData?.age || ""}
            onChange={(e: any) =>
              setFormData((prev) => ({ ...prev, age: e.target.value }))
            }
          />
        </Row>

        <Button type="submit" variant="secondary">
          Add Student
        </Button>
      </Form>
    </>
  );
};

export default AddForm;
