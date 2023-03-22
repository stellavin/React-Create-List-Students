import Button from "react-bootstrap/Button";

const ButtonComponent = ({
  name,
  color,
  handleOnClick,
  type,
}: {
  name: string;
  type?: string;
  color: string;
  handleOnClick?: any;
}) => {
  return (
    <>
      <Button onClick={() => handleOnClick()} variant={color}>
        {name}
      </Button>
    </>
  );
};

export default ButtonComponent;
