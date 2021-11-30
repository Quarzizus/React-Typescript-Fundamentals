import { ChangeEvent, SyntheticEvent, useState } from "react";

const useFieldForm = <T extends Object>(initialState: T) => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return { values, handleChange };
};

export { useFieldForm };
