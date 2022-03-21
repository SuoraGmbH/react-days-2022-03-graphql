import React, { ForwardedRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form/dist/types/errors";
import { FormError } from "./FormError";

interface Props<T extends string> {
  name: T;
  errors: { [key in T]: FieldError };
}

export const InputWithError = React.forwardRef(
  <T extends string>(
    props: Props<T> & Omit<InputHTMLAttributes<HTMLInputElement>, "name">,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    const { name } = props;
    const { errors, ...passthroughProps } = props;
    const error = errors[name];

    return (
      <>
        <input {...passthroughProps} ref={ref} />
        {error && <FormError error={error} />}
      </>
    );
  }
);
