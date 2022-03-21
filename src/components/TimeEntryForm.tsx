import React from "react";
import { NewTimeEntry } from "../hooks/useTimeEntries";
import { SubmitHandler, useForm } from "react-hook-form";
import { FormError } from "./FormError";
import { InputWithError } from "./InputWithError";
import { RegisterOptions } from "react-hook-form/dist/types/validator";

interface Props {
  onCreateTimeEntry: (timeEntry: NewTimeEntry) => void;
}

interface FormData {
  comment: string;
  start: string;
  end: string;
}

export const TimeEntryForm: React.FunctionComponent<Props> = ({
  onCreateTimeEntry,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    getValues,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    onCreateTimeEntry({
      comment: data.comment,
      start: new Date(data.start),
      end: new Date(data.end),
      projectId: "workshop",
    });

    reset();
  };

  const customRegister = <TName extends keyof FormData>(
    name: TName,
    options: RegisterOptions<FormData, TName> = {}
  ) => {
    const originalRegistrationData = register(name, {
      ...options,
    });

    return {
      ...originalRegistrationData,
      errors,
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputWithError {...customRegister("comment")} />
      <FormError error={errors.comment} />
      <label>
        Start
        <InputWithError
          type="datetime-local"
          {...customRegister("start", { required: "Start is required" })}
        />
      </label>

      <label>
        End
        <InputWithError
          type="datetime-local"
          {...customRegister("end", {
            required: "End is required",
            validate: (value) => {
              const start = getValues("start");
              if (new Date(value) < new Date(start)) {
                return "End time must be after start time";
              }
              return true;
            },
          })}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
