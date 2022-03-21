import React from "react";
import { TimeEntry } from "../hooks/useTimeEntries";
import { TimeEntryView } from "./TimeEntryView";

interface Props {
  timeEntries: TimeEntry[];
}

export const TimeEntryList: React.FunctionComponent<Props> = ({
  timeEntries,
}) => {
  return (
    <div>
      {timeEntries.map((timeEntry) => (
        <TimeEntryView timeEntry={timeEntry} />
      ))}
    </div>
  );
};
