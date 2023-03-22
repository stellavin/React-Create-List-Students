import { Col, Form } from "react-bootstrap";

const Input = ({
  name,
  type,
  controlId,
  onChange,
  value,
}: {
  name: string;
  type: string;
  value: string | number;
  controlId: string;
  onChange: any;
}) => {
  return (
    <Form.Group as={Col} md="6" controlId={controlId}>
      <Form.Label>{name}</Form.Label>
      <Form.Control
        required
        type={type}
        placeholder={name}
        value={value}
        autoComplete="off"
        onChange={onChange}
      />
    </Form.Group>
  );
};

export default Input;
