import { useState } from "react";
import { gql } from "@apollo/client";
import { useAllTimeEntriesQuery, useLogTimeMutation } from "../generated/graphql";

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
  const { data, error, refetch } = useAllTimeEntriesQuery();
  const [logTimeMutation, { error: mutationError }] = useLogTimeMutation();

  if (error) {
    throw error;
  }
  if (mutationError) {
    throw mutationError;
  }

  const logTime = (timeEntry: NewTimeEntry): void => {
    logTimeMutation({
      variables: {
        projectId: timeEntry.projectId,
        comment: timeEntry.comment,
        start: timeEntry.start.toISOString(),
        end: timeEntry.end.toISOString(),
      }
    }).then(() => {
      refetch()
    })
  };

  const timeEntriesFromGraphql = data?.timeEntries ?? [];
  const timeEntries = timeEntriesFromGraphql.map((timeEntry): TimeEntry => ({
    ...timeEntry,
    start: new Date(timeEntry.start),
    end: new Date(timeEntry.end),
  }));

  return {
    timeEntries: timeEntries,
    logTime: logTime,
  };
};

export default useTimeEntries;
