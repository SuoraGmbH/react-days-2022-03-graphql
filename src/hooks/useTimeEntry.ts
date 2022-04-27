const useTimeEntry = ({ id }: { id: string | undefined }) => {
  if (!id) {
    return {
      timeEntry: null,
    };
  }

  return {
    timeEntry: {
      id: "1",
      comment: "My first time entry",
      start: new Date("2022-04-28T10:00:00Z"),
      end: new Date("2022-04-28T11:00:00Z"),
      project: {
        name: "Workshop",
      },
    },
  };
};

export default useTimeEntry;
