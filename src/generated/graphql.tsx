import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type Mutation = {
  __typename?: 'Mutation';
  addTimeEntry: TimeEntry;
};


export type MutationAddTimeEntryArgs = {
  comment: Scalars['String'];
  end: Scalars['Date'];
  projectId: Scalars['String'];
  start: Scalars['Date'];
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['ID'];
  name: Scalars['String'];
  timeEntriesConnection?: Maybe<ProjectTimeEntriesConnection>;
};

export type ProjectTimeEntriesConnection = {
  __typename?: 'ProjectTimeEntriesConnection';
  edges: Array<ProjectTimeEntriesEdge>;
};

export type ProjectTimeEntriesEdge = {
  __typename?: 'ProjectTimeEntriesEdge';
  node: TimeEntry;
};

export type Query = {
  __typename?: 'Query';
  project?: Maybe<Project>;
  projects: Array<Project>;
  searchProjects: Array<Project>;
  timeEntries: Array<TimeEntry>;
  timeEntry?: Maybe<TimeEntry>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QuerySearchProjectsArgs = {
  name?: InputMaybe<Scalars['String']>;
};


export type QueryTimeEntryArgs = {
  id: Scalars['ID'];
};

export type TimeEntry = {
  __typename?: 'TimeEntry';
  comment: Scalars['String'];
  end: Scalars['Date'];
  id: Scalars['ID'];
  project: Project;
  start: Scalars['Date'];
};

export type AllTimeEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTimeEntriesQuery = { __typename?: 'Query', timeEntries: Array<{ __typename?: 'TimeEntry', id: string, comment: string, start: any, end: any, project: { __typename?: 'Project', name: string } }> };

export type LogTimeMutationVariables = Exact<{
  comment: Scalars['String'];
  projectId: Scalars['String'];
  start: Scalars['Date'];
  end: Scalars['Date'];
}>;


export type LogTimeMutation = { __typename?: 'Mutation', addTimeEntry: { __typename?: 'TimeEntry', id: string } };

export type TimeEntryQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type TimeEntryQuery = { __typename?: 'Query', timeEntry?: { __typename?: 'TimeEntry', id: string, comment: string, start: any, end: any, project: { __typename?: 'Project', id: string, name: string } } | null };


export const AllTimeEntriesDocument = gql`
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

/**
 * __useAllTimeEntriesQuery__
 *
 * To run a query within a React component, call `useAllTimeEntriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllTimeEntriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllTimeEntriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllTimeEntriesQuery(baseOptions?: Apollo.QueryHookOptions<AllTimeEntriesQuery, AllTimeEntriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllTimeEntriesQuery, AllTimeEntriesQueryVariables>(AllTimeEntriesDocument, options);
      }
export function useAllTimeEntriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllTimeEntriesQuery, AllTimeEntriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllTimeEntriesQuery, AllTimeEntriesQueryVariables>(AllTimeEntriesDocument, options);
        }
export type AllTimeEntriesQueryHookResult = ReturnType<typeof useAllTimeEntriesQuery>;
export type AllTimeEntriesLazyQueryHookResult = ReturnType<typeof useAllTimeEntriesLazyQuery>;
export type AllTimeEntriesQueryResult = Apollo.QueryResult<AllTimeEntriesQuery, AllTimeEntriesQueryVariables>;
export const LogTimeDocument = gql`
    mutation LogTime($comment: String!, $projectId: String!, $start: Date!, $end: Date!) {
  addTimeEntry(comment: $comment, projectId: $projectId, start: $start, end: $end) {
    id
  }
}
    `;
export type LogTimeMutationFn = Apollo.MutationFunction<LogTimeMutation, LogTimeMutationVariables>;

/**
 * __useLogTimeMutation__
 *
 * To run a mutation, you first call `useLogTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logTimeMutation, { data, loading, error }] = useLogTimeMutation({
 *   variables: {
 *      comment: // value for 'comment'
 *      projectId: // value for 'projectId'
 *      start: // value for 'start'
 *      end: // value for 'end'
 *   },
 * });
 */
export function useLogTimeMutation(baseOptions?: Apollo.MutationHookOptions<LogTimeMutation, LogTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogTimeMutation, LogTimeMutationVariables>(LogTimeDocument, options);
      }
export type LogTimeMutationHookResult = ReturnType<typeof useLogTimeMutation>;
export type LogTimeMutationResult = Apollo.MutationResult<LogTimeMutation>;
export type LogTimeMutationOptions = Apollo.BaseMutationOptions<LogTimeMutation, LogTimeMutationVariables>;
export const TimeEntryDocument = gql`
    query TimeEntry($id: ID!) {
  timeEntry(id: $id) {
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

/**
 * __useTimeEntryQuery__
 *
 * To run a query within a React component, call `useTimeEntryQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimeEntryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimeEntryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useTimeEntryQuery(baseOptions: Apollo.QueryHookOptions<TimeEntryQuery, TimeEntryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimeEntryQuery, TimeEntryQueryVariables>(TimeEntryDocument, options);
      }
export function useTimeEntryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimeEntryQuery, TimeEntryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimeEntryQuery, TimeEntryQueryVariables>(TimeEntryDocument, options);
        }
export type TimeEntryQueryHookResult = ReturnType<typeof useTimeEntryQuery>;
export type TimeEntryLazyQueryHookResult = ReturnType<typeof useTimeEntryLazyQuery>;
export type TimeEntryQueryResult = Apollo.QueryResult<TimeEntryQuery, TimeEntryQueryVariables>;