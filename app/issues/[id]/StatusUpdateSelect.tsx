"use client";

import React, { useState } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";

interface StatusUpdateSelectProps {
  issueId: number;
}

const StatusUpdateSelect: React.FC<StatusUpdateSelectProps> = ({ issueId }) => {
  const [status, setStatus] = useState<string>("");

  const updateIssueStatus = async (newStatus: string) => {
    try {
      await axios.patch(`/api/issues/${issueId}`, { status: newStatus });
      toast.success("Status updated successfully!");
      setStatus(newStatus); // Update local state
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  return (
    <div>
      <select
        value={status}
        onChange={(e) => updateIssueStatus(e.target.value)}
      >
        <option value="OPEN">Open</option>
        <option value="IN_PROGRESS">In Progress</option>
        <option value="CLOSED">Closed</option>
      </select>
      <Toaster />
    </div>
  );
};

export default StatusUpdateSelect;
