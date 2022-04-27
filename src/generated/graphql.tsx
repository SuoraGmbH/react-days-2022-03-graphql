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


export type AllTimeEntriesQuery = { __typename?: 'Query', timeEntries: Array<{ __typename?: 'TimeEntry', id: string }> };


export const AllTimeEntriesDocument = gql`
    query AllTimeEntries {
  timeEntries {
    id
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