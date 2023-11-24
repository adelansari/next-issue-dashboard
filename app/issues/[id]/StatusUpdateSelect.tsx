"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { toast, Toaster } from "react-hot-toast";
import { Select } from "@radix-ui/themes";
import { Status } from "@prisma/client";

interface StatusUpdateSelectProps {
  issueId: number;
  currentStatus: Status;
  onStatusChange: (newStatus: Status) => void;
}

const StatusUpdateSelect: React.FC<StatusUpdateSelectProps> = ({
  issueId,
  currentStatus,
  onStatusChange,
}) => {
  const [status, setStatus] = useState<Status>(currentStatus);

  useEffect(() => {
    setStatus(currentStatus);
  }, [currentStatus]);

  const updateIssueStatus = async (newStatus: Status) => {
    try {
      const response = await axios.patch(`/api/issues/${issueId}`, {
        status: newStatus,
      });
      toast.success("Status updated successfully!");
      onStatusChange(newStatus);
    } catch (error) {
      toast.error("Failed to update status");
    }
  };

  return (
    <div>
      <Select.Root onValueChange={updateIssueStatus} value={status}>
        <Select.Trigger aria-label="Issue status">
          {/* Display selected status here */}
        </Select.Trigger>
        <Select.Content>
          <Select.Group>
            <Select.Item value="OPEN">Open</Select.Item>
            <Select.Item value="IN_PROGRESS">In Progress</Select.Item>
            <Select.Item value="CLOSED">Closed</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>
      <Toaster />
    </div>
  );
};

export default StatusUpdateSelect;
