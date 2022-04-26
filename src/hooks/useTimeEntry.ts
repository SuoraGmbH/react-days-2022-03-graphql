import { gql } from "@apollo/client";
import {useTimeEntryQuery} from "../generated/graphql";

gql`
  query TimeEntry($id: ID!) {
    timeEntry(id: $id) {
      id
      start
      end
    }
  }
`;


const useTimeEntry = ({id}: {id: string | undefined}) => {
  const { data } = useTimeEntryQuery({variables: {id: id?? ''}, skip: !id});

  return {
    timeEntry: data?.timeEntry,
  };
};

export default useTimeEntry;
