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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-8 divide-y divide-gray-200 px-4"
    >
      <div className="space-y-8 divide-y divide-gray-200 sm:space-y-5">
        <div className="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
          <div>
            <h3 className="text-lg leading-6 font-medium text-gray-900">
              Create time entry
            </h3>
          </div>
          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="comment"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Comment
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <InputWithError
                  {...customRegister("comment")}
                  type="text"
                  id="comment"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="start"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Start
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <InputWithError
                  {...customRegister("start", {
                    required: "Start is required",
                  })}
                  type="datetime-local"
                  id="start"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 sm:space-y-5">
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="start"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                End
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <InputWithError
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
                  type="datetime-local"
                  id="end"
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-5">
        <div className="flex justify-end">
          <button
            type="submit"
            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};
