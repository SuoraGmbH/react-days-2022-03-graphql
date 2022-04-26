import React from "react";
import { TimeEntryForm } from "../components/TimeEntryForm";
import useTimeEntries from "../hooks/useTimeEntries";
import useProjects from "../hooks/useProjects";
import ProjectList from "../components/ProjectList";
import { TimeEntryList } from "../components/TimeEntryList";

function HomePage() {
  const { timeEntries, logTime } = useTimeEntries();
  const { projects, loading, error } = useProjects();

  return (
    <div className="content">
      <h1>Time Entries</h1>
      <TimeEntryList timeEntries={timeEntries} />
      <TimeEntryForm
        onCreateTimeEntry={(timeEntry) => {
          logTime({ ...timeEntry, projectId: "workshop" });
        }}
      />
      <ProjectList loading={loading} projects={projects} error={error} />
    </div>
  );
}

export default HomePage;
