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
    <div className="max-w-3xl mx-auto sm:px-6 lg:px-8">
      <div className="bg-white px-4 py-5 border-b border-gray-200 sm:px-6">
        <h1 className="text-lg leading-6 font-medium text-gray-900">
          Time Entries
        </h1>
      </div>
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
