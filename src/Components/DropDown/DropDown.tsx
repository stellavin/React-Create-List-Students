import Form from "react-bootstrap/Form";

function DropDown({
  Nationalities,
  setSelected,
}: {
  Nationalities: [];
  setSelected: any;
}) {
  return (
    <>
      <Form.Select
        onChange={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setSelected(e.target.value);
        }}
      >
        {Nationalities.map((nation) => {
          return (
            <option key={nation} value={nation}>
              {nation}
            </option>
          );
        })}
      </Form.Select>
      <br />
    </>
  );
}

export default DropDown;
