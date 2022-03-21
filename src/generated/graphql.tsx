import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}


export type Mutation = {
  __typename?: 'Mutation';
  addTimeEntry: TimeEntry;
};


export type MutationAddTimeEntryArgs = {
  comment: Scalars['String'];
  projectId: Scalars['String'];
  start: Scalars['Date'];
  end: Scalars['Date'];
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
  timeEntries: Array<TimeEntry>;
  project?: Maybe<Project>;
  projects: Array<Project>;
  searchProjects: Array<Project>;
};


export type QueryProjectArgs = {
  id: Scalars['ID'];
};


export type QuerySearchProjectsArgs = {
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type TimeEntry = {
  __typename?: 'TimeEntry';
  id: Scalars['ID'];
  comment: Scalars['String'];
  start: Scalars['Date'];
  end: Scalars['Date'];
  project: Project;
};


export type AllTimeEntriesQueryVariables = Exact<{ [key: string]: never; }>;


export type AllTimeEntriesQuery = (
  { __typename?: 'Query' }
  & { timeEntries: Array<(
    { __typename?: 'TimeEntry' }
    & Pick<TimeEntry, 'id' | 'comment' | 'start' | 'end'>
    & { project: (
      { __typename?: 'Project' }
      & Pick<Project, 'id' | 'name'>
    ) }
  )> }
);

export type LogTimeMutationVariables = Exact<{
  comment: Scalars['String'];
  projectId: Scalars['String'];
  start: Scalars['Date'];
  end: Scalars['Date'];
}>;


export type LogTimeMutation = (
  { __typename?: 'Mutation' }
  & { addTimeEntry: (
    { __typename?: 'TimeEntry' }
    & Pick<TimeEntry, 'id'>
  ) }
);


export const AllTimeEntriesDocument = gql`
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