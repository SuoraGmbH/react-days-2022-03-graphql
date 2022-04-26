interface TimeEntry {
  id: string;
  comment: string;
  start: Date;
  end: Date;
}

export interface Project {
  id: string;
  name: string;
  timeEntries: TimeEntry[];
}

interface ProjectsData {
  loading: boolean;
  error?: Error;
  projects: readonly Project[];
}

const useProjects = (): ProjectsData => {
  return {
    loading: false,
    projects: [
      {
        id: "workshop",
        name: "Workshop",
        timeEntries: [
          {
            id: "entry-1",
            comment: "Learning things",
            start: new Date("2022-01-01T10:00"),
            end: new Date("2022-01-01T11:00"),
          },
          {
            id: "entry-2",
            comment: "Learning stuff",
            start: new Date("2022-01-01T12:00"),
            end: new Date("2022-01-01T13:00"),
          },
        ],
      },
    ],
  };
};

export default useProjects;
