import React from "react";
import { TimeEntry } from "../hooks/useTimeEntries";
import dayjs from "dayjs";

interface Props {
  timeEntry: TimeEntry;
}

export const TimeEntryView: React.FunctionComponent<Props> = ({
  timeEntry,
}) => {
  return (
    <div key={timeEntry.id}>
      <h3>{`${timeEntry.comment} (${dayjs(timeEntry.start).format('lll')} - ${dayjs(timeEntry.end).format('lll')})`}</h3>
    </div>
  );
};
