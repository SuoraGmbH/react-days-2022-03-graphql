import React from "react";
import ProjectView from "./ProjectView";
import { Project } from "../hooks/useProjects";

interface Props {
  loading: boolean;
  error?: Error;
  projects: readonly Project[];
}

const ProjectList: React.FunctionComponent<Props> = ({
  loading,
  error,
  projects,
}) => {
  if (loading) {
    return <span>Loading…</span>;
  }

  if (error) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div role="list">
      {projects.map((project) => (
        <ProjectView key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
