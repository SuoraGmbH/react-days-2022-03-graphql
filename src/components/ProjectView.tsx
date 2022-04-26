import React from "react";
import { Project } from "../hooks/useProjects";

interface Props {
  project: Project;
}

const ProjectView: React.FunctionComponent<Props> = ({ project }) => {
  return (
    <article role="listitem article">
      <h2>{project.name}</h2>
      <div role="list">
        {project.timeEntries.map((timeEntry) => (
          <article role="listitem article" key={timeEntry.id}>
            {timeEntry.comment}
          </article>
        ))}
      </div>
    </article>
  );
};

export default ProjectView;
