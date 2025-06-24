# Task Manager App
This is a small reusable component library built using **React**, **Vite**, **TypeScript**, and **Tailwind CSS**. The application will list all the availabel tasks. User will be able to search for tasks based on the title, sort the tasks based on title. It allow users to Add new tasks, change the status of the Tasks, Delete tasks, Filter tasks based on Status and/or Priority 

## Objective
- Implement state management using the useState hook.
- Build components  that render lists of data with proper key management.
- Use conditional rendering to show different states based on item properties.

## Features
- See all the tasks available
- Add new tasks 
- Search for tasks based on the title
- Sort the tasks based on the title
- Let users to change status of the tasks
- Let users to delete tasks
- Let users filter tasks based on status and/or priority

# Project Structure
task-dashboard/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   └── Dashboard.tsx
│   │   ├── TaskList/
│   │   │   ├── TaskList.tsx
│   │   │   └── TaskItem.tsx
│   │   ├── TaskForm/
│   │   │   └── TaskForm.tsx
│   │   ├── TaskFilter/
│   │   │   └── TaskFilter.tsx
│   ├── types/
│   │   └── index.ts
│   ├── utils/
│   │   └── taskUtils.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json



## Component Requirements
- Dashboard Component
- Task List Component
- Task Item Component
- Task Filter Component
- Task Form component

### 1.TaskList Component
- Manages all task-related state.
- Handles deletion, status updates, and filtering logic.
- Renders a filtered list of TaskItems.

### 2. TaskItem Component
- Displays a single task.
- Provides dropdown for status change.
- Delete button removes the task.

### 3. TaskFilter Component
- Provides UI to select status and priority filters.
- Communicates filter changes back to TaskList.

### 4. TaskForm Component
- Manages task state of current/new task 
- Provides UI to enter all the data necessary to create new task
- Adds/Ceates a new task in the task list with callback function
- Performs form level validation

## Example Interaction
- Upon loading the application it lists all the tasks
- Allows user to search from existing tasks
- Allows User to sort the tasks
- Allows user to add new task by providing all the necessary data
- Allows user to filter tasks, delete tasks, change status of tasks

## Pre-Requisite 
- Ensure you have a recent LTS (Long-Term Support) version of Node.js installed. Node.js includes npm (Node Package Manager). - You can verify your installation by opening your terminal or command prompt and running:
    " node -v "
    " npm -v "

- Have tailwind installed for vite/REACT

## How to Run
1. Clone or download the project.
2. Navigate (cd) to the project folder
3. Install Dependencies run:-  npm install
4. Start the development server by running:- npm run dev
5. Open the link in browser


## Reflection:
1. How you implemented React and TypeScript features?
- Typescript: By creating types/interfaces for the props and importing it in the components as and when required to provide strong type safety and better code structure.
- React: I used functional components with hooks like useState for managing component-level state. I also passed data and callback functions through props to communicate between parent and child components.

2. The challenges you encountered and how you overcame them
- The main challenge was applying filtering logic based on all the required conditions for "Sorting", "Filters", "searching". I used useState hook to manage the state of respective variables and implemented the functionality.
- The second challenge was having/implementing callback function logic each time when I wanted to send the data back up to the parent in my case TaskList Component, I made mistakes and used console logs mostly to understand what is being passed between parent and child and eventually got the functionality working.

3. Your approach to component composition and state management
- My approach for component composition was simple, I followed the project requiremts and created the components accordingly.
- Seggregated each functionality in to component and imported in the correct parent component
- Implemented state managment local for the child component for the variable whose scope is within the component and used props and callback functions to transfer data/state between the components.






