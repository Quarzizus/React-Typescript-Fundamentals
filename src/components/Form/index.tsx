import { ChangeEvent, MouseEvent } from "react";
import { useFieldForm } from "../../hooks/useFieldForm";

interface FormData {
  email: string;
  edad?: number;
  name: string;
}

const Form = (): JSX.Element => {
  const { values, handleChange } = useFieldForm<FormData>({
    name: "",
    email: "",
  });
  return (
    <form>
      <p>Form</p>
      <input
        type="text"
        placeholder="name"
        name="name"
        value={values.name}
        onChange={handleChange}
      />
      <button
        onClick={(e: MouseEvent<HTMLButtonElement>): void => {
          e.preventDefault();
          console.log(e);
        }}
      >
        Print
      </button>
    </form>
  );
};

export { Form };
