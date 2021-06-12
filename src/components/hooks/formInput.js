import { useState } from "react";

const formInput = (initial) => {
  const [value, setValue] = useState(initial);

  return {
    value,
    setValue,
    bind: {
      onChange: (e) => {
        setValue(e.target.value);
      },
    },
  };
};

export default formInput;
