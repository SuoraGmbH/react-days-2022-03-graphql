import React from "react";
import { FieldError } from "react-hook-form/dist/types/errors";

interface Props {
  error?: FieldError;
}

export const FormError: React.FunctionComponent<Props> = ({ error }) => {
  if (!error) {
    return null;
  }

  if (error.type === "required") {
    return <span>{error.message ?? "This field is required"}</span>;
  }

  return (
    <div>
      <span>{error.message}</span>
    </div>
  );
};
