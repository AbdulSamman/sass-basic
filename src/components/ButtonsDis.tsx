import { useState } from "react";

export const ButtonDis = () => {
  const [isDisabled, setIsDisabled] = useState(false);

  return (
    <div>
      <button onClick={() => setIsDisabled(!isDisabled)}>
        {isDisabled ? "Enabled" : "Disabled"}
      </button>

      <hr />
      <button className={isDisabled ? "primary  primary-disabled" : "primary"}>
        Primary
      </button>
      <button
        className={isDisabled ? "secondary  secondary-disabled" : "secondary"}>
        Secondary
      </button>
      <button className={isDisabled ? "warning  warning-disabled" : "warning"}>
        Warning
      </button>
      <button className={isDisabled ? "error  error-disabled" : "error"}>
        Error
      </button>
      <button className={isDisabled ? "info  info-disabled" : "info"}>
        Info
      </button>
    </div>
  );
};
