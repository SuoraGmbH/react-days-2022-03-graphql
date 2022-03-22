import React from 'react';

import './App.css';

import useTimeEntries from "./hooks/useTimeEntries";
import {TimeEntryList} from "./components/TimeEntryList";
import {TimeEntryForm} from "./components/TimeEntryForm";
import ProjectList from "./components/ProjectList";
import useProjects from "./hooks/useProjects";

function App() {
  const {timeEntries, logTime} = useTimeEntries();
  const {projects, loading} = useProjects()

  return (
    <div className="content">
      <h1>Time Entries</h1>
      <TimeEntryList timeEntries={timeEntries}/>
      <TimeEntryForm
        onCreateTimeEntry={(timeEntry) => {
          logTime({...timeEntry, projectId: "workshop"});
        }}
      />
      <ProjectList loading={loading} projects={projects} />
    </div>
  );
}

export default App;
