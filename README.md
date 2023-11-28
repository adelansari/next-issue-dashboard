# Next Issue Dashboard

## Introduction

Next Issue Dashboard is a comprehensive tool designed for efficient issue tracking and management. Built using modern web technologies, it offers a user-friendly interface for monitoring and updating issue statuses, managing assignments, and visualizing issue trends.

![Dashboard](./public/ReadMeImages/issue-dashboard.png)


## Features

- **Dashboard Overview:** A comprehensive view of all issues, categorized by their status (Open, In Progress, Closed).
- **Issue Management:** Create, edit, and delete issues with ease along with a nice mark markdown implementation where you can add detailed description or even store images.
- **Label Filtering:** Filter issues by labels for better organization.
- **Detailed View:** Access detailed information for each issue.
- **Status Updates:** Quickly update and track the status of issues.
- **Assignee Management:** Assign issues to team members.
- **Data Visualization:** View issue trends and statuses through charts.
- **Authentication:** Secure user authentication system.
- **Responsive Design:** Fully responsive interface for all devices.

## Technology Stack

- **Frontend:** React, Next.js
- **Backend:** Node.js, Prisma
- **Database:** PostgreSQL
- **Styling:** Tailwind CSS
- **Authentication:** NextAuth
- **Error Tracking:** Sentry

## Technical Overview
- **Next.js**: Utilizes the capabilities of Next.js for server-side rendering and static generation.
- **React Query**: Implements React Query for efficient server state management in React applications.
- **Prisma**: Leverages Prisma as the database ORM, providing a robust and flexible data management system.
- **Radix UI**: Incorporates Radix UI components for building high-quality, accessible design systems.

## Project Structure

- **app/**: Main application directory.
  - **IssueChart.tsx, IssueSummary.tsx, LatestIssues.tsx**: Components for issue visualization.
  - **NavBar.tsx**: Navigation bar component.
  - **api/**: API routes for handling issues and users.
  - **auth/**: Authentication logic.
  - **components/**: Reusable UI components.
  - **issues/**: Issue management pages and components.
  - **layout.tsx**: Main layout component.
- **prisma/**: Prisma ORM configuration and migrations.
- **public/**: Static files like images and icons.
- **.eslintrc.json, .gitignore, tsconfig.json**: Configuration files for ESLint, Git, and TypeScript.



## Getting Started

### Prerequisites

- Node.js
- PostgreSQL

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/adelansari/next-issue-dashboard.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the database (refer to `prisma/` directory).
4. Start the development server:
   ```bash
   npm run dev
   ```
5. Add all the project secrets in `.env` file in the root:
   ```bash
   # https://www.prisma.io/docs/reference/database-reference/connection-urls
    DATABASE_URL="postgresql://User:Password@Host:Port/DbName"

    NEXTAUTH_URL="http://localhost:3000"

    # Run 'openssl rand -base64 32' to generate a secret. 
    NEXTAUTH_SECRET=""

    # https://developers.google.com/workspace/guides/create-credentials
    GOOGLE_CLIENT_ID=""
    GOOGLE_CLIENT_SECRET=""
   ```

## Usage

After starting the development server, navigate to `http://localhost:3000` to access the dashboard. Log in to manage issues, view charts, and perform other administrative tasks.

## Preview

### Mobile View:
![Issues Mobile View](./public/ReadMeImages/issue-mobile-view.png)

### Issue List Page
![Issues List](./public/ReadMeImages/issues-list.png)

### Issue Preview
![Issue Preview](./public/ReadMeImages/issues-preview.png)

### Issue Markdown Edit
![Issue Markdown Edit](./public/ReadMeImages/issue-markdown-edit.png)

### New Issue Page
![New Issue](./public/ReadMeImages/new-issue.png)



## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---