import { useState } from "react";
import { gql } from "@apollo/client";

gql`
  query AllTimeEntries {
    timeEntries {
      id
    }
  }
`;

interface Project {
  name: string;
}

export interface TimeEntry {
  id: string;
  comment: string;
  start: Date;
  end: Date;
  project: Project;
}

export interface NewTimeEntry {
  comment: string;
  start: Date;
  end: Date;
  projectId: string;
}

const useTimeEntries = () => {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([
    {
      id: "timeEntry-1",
      comment: "Learning React",
      start: new Date("2022-01-01T10:00:00"),
      end: new Date("2022-01-01T11:00:00"),
      project: {
        name: "Workshop",
      },
    },
    {
      id: "timeEntry-2",
      comment: "Learning Redux",
      start: new Date("2022-01-01T11:00:00"),
      end: new Date("2022-01-01T12:00:00"),
      project: {
        name: "Workshop",
      },
    },
  ]);

  const logTime = (timeEntry: NewTimeEntry): void => {
    setTimeEntries((previousTimeEntries) => [
      ...previousTimeEntries,
      {
        id: Date.now().toString(),
        comment: timeEntry.comment,
        start: timeEntry.start,
        end: timeEntry.end,
        project: {
          name: "Workshop",
        },
      },
    ]);
  };

  return {
    timeEntries,
    logTime: logTime,
  };
};

export default useTimeEntries;
