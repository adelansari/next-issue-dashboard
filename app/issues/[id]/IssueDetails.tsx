"use client";
import { IssueStatusBadge } from "@/app/components";
import { Issue, Status } from "@prisma/client";
import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import ReactMarkdown from "react-markdown";
import StatusUpdateSelect from "./StatusUpdateSelect";
import { useState, useEffect } from "react";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  const [currentIssue, setCurrentIssue] = useState(issue);

  const handleStatusChange = (newStatus: Status) => {
    setCurrentIssue({ ...currentIssue, status: newStatus });
  };

  return (
    <>
      <Heading>{issue.title}</Heading>
      <Flex className="space-x-3" my="2">
        <IssueStatusBadge status={currentIssue.status} />
        <StatusUpdateSelect
          issueId={currentIssue.id}
          currentStatus={currentIssue.status}
          onStatusChange={handleStatusChange}
        />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="4">
        <ReactMarkdown>{issue.description}</ReactMarkdown>
      </Card>
    </>
  );
};

export default IssueDetails;
