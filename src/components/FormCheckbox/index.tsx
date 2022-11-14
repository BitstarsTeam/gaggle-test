import { useState } from "react";
import "./style.scss";

export const FormCheckbox = ({}) => {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="form-checkbox">
      <input
        type="checkbox"
        checked={checked}
				className={checked ? "input-check" : "input-uncheck"}
        onChange={() => setChecked(!checked)}
      />
      <span>Remember</span>
    </div>
  );
};
