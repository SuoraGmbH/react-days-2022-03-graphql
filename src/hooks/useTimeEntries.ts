import { gql } from "@apollo/client";
import { useAllTimeEntriesQuery } from "../generated/graphql";

gql`
  query AllTimeEntries {
    timeEntries {
      id
    }
  }
`;

export interface TimeEntry {
  id: string;
  comment: string;
  start: Date;
  end: Date;
}

export interface NewTimeEntry {
  comment: string;
  start: Date;
  end: Date;
  projectId: string;
}

const useTimeEntries = () => {
  useAllTimeEntriesQuery();

  return {
    timeEntries: [
      {
        id: "1",
        comment: "My first time entry",
        start: new Date("2022-04-28T10:00:00Z"),
        end: new Date("2022-04-28T11:00:00Z"),
      },
      {
        id: "2",
        comment: "My second time entry",
        start: new Date("2022-04-28T10:00:00Z"),
        end: new Date("2022-04-28T11:00:00Z"),
      },
    ],
    logTime: (timeEntry: NewTimeEntry): void => {
      console.log("log time entry", timeEntry);
    },
  };
};

export default useTimeEntries;
