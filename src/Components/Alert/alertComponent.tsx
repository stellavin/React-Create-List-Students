import Alert from "react-bootstrap/Alert";

const AlertComponent = ({
  variant,
  message,
}: {
  variant: string;
  message: string;
}) => {
  return (
    <Alert key={variant} variant={variant}>
      {message}!
    </Alert>
  );
};
export default AlertComponent;
