import React from "react";
import { NavLink, useParams } from "react-router-dom";
import useTimeEntry from "../hooks/useTimeEntry";
import dayjs from "dayjs";

function TimeEntryPage() {
  const { id } = useParams();

  const { timeEntry } = useTimeEntry({ id });

  if (!timeEntry) {
    return (
      <div className="bg-white min-h-full px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
        <div className="max-w-max mx-auto">
          <main className="sm:flex">
            <p className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
                  Time entry not found
                </h1>
              </div>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase">
            {timeEntry.project.name}
          </h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            {timeEntry.comment}
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            {dayjs(timeEntry.start).format("lll")} -{" "}
            {dayjs(timeEntry.end).format("lll")}
          </p>
          <NavLink
            to="/"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 sm:w-auto"
          >
            Back
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default TimeEntryPage;
