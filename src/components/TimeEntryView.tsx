import React from "react";
import { TimeEntry } from "../hooks/useTimeEntries";
import dayjs from "dayjs";
import { NavLink } from "react-router-dom";

interface Props {
  timeEntry: TimeEntry;
}

export const TimeEntryView: React.FunctionComponent<Props> = ({
  timeEntry,
}) => {
  return (
    <li>
      <NavLink
        to={`/timeEntry/${timeEntry.id}`}
        className="block hover:bg-gray-50"
      >
        <div className="flex items-center px-4 py-4 sm:px-6">
          <div className="min-w-0 flex-1 flex items-center">
            <div className="flex-shrink-0">⏱</div>
            <div className="min-w-0 flex-1 px-4 md:grid md:grid-cols-2 md:gap-4">
              <div>
                <p className="text-sm font-medium text-indigo-600 truncate">
                  {timeEntry.comment}
                </p>
                <p className="mt-2 flex items-center text-sm text-gray-500">
                  {dayjs(timeEntry.start).format("lll")} -{" "}
                  {dayjs(timeEntry.end).format("lll")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </li>
  );
};
