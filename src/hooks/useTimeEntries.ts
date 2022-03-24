import { useState } from "react";
import { gql } from "@apollo/client";
import { useAllTimeEntriesQuery } from "../generated/graphql";

gql`
  query AllTimeEntries {
    timeEntries {
      id
      comment
      start
      end
      project {
        name
      }
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
  const { data, error } = useAllTimeEntriesQuery();

  if (error) {
    throw error;
  }

  const [timeEntriesFromState, setTimeEntries] = useState<TimeEntry[]>([
    {
      id: "timeEntry-1",
      comment: "Learning React State",
      start: new Date("2022-01-01T10:00:00"),
      end: new Date("2022-01-01T11:00:00"),
      project: {
        name: "Workshop",
      },
    },
    {
      id: "timeEntry-2",
      comment: "Learning Redux State",
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

  const timeEntriesFromGraphql = data?.timeEntries ?? [];
  const timeEntries = timeEntriesFromGraphql.map((timeEntry): TimeEntry => ({
    ...timeEntry,
    start: new Date(timeEntry.start),
    end: new Date(timeEntry.end),
  }))

  return {
    timeEntries: timeEntries,
    logTime: logTime,
  };
};

export default useTimeEntries;
