import React from "react";
import { useParams } from "react-router-dom";
import useTimeEntry from "../hooks/useTimeEntry";

function TimeEntryPage() {
  const { id } = useParams();

  const { timeEntry } = useTimeEntry({ id });

  return (
    <div className="content">
      <h1>Time Entry {JSON.stringify(timeEntry)}</h1>
    </div>
  );
}

export default TimeEntryPage;
