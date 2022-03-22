import { gql } from "@apollo/client";
import {
  useAllTimeEntriesQuery, useLogTimeMutation
} from "../generated/graphql";

gql`
  query AllTimeEntries {
    timeEntries {
      id
      comment
      start
      end
      project {
        id
        name
      }
    }
  }
`;

gql`
  mutation LogTime($comment: String!, $projectId: String!, $start: Date!, $end: Date!) {
    addTimeEntry(comment: $comment, projectId: $projectId, start: $start, end: $end) {
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
  const { data } = useAllTimeEntriesQuery();
  const [logTimeMutation] = useLogTimeMutation({
    refetchQueries: ["AllTimeEntries"],
  });

  const logTime = (timeEntry: NewTimeEntry): void => {
    logTimeMutation({
      variables: {
        ...timeEntry
      },
    });
  };

  return {
    timeEntries: data ? data.timeEntries : [],
    logTime,
  };
};

export default useTimeEntries;
