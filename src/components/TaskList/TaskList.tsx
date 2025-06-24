// Importing required components and types
import TaskItem from "./TaskItem";
import type { Task, TaskStatus } from "../../types";
import { useState } from "react";
import TaskFilter from "../TaskFilter/TaskFilter";
import TaskForm from "../TaskForm/TaskForm";

function TaskList() {
  //Defien default list of Tasks
  const tasks: Task[] = [
    {
      id: "1",
      title: "Task1 - Lab 3 Assignment",
      description: "Finish Task manager app and submit it",
      status: "pending",
      priority: "low",
      dueDate: "2025-06-20",
    },
    {
      id: "2",
      title: "React",
      description: "Watch react videos",
      status: "completed",
      priority: "low",
      dueDate: "2025-06-20",
    },
    {
      id: "3",
      title: "Design landing page",
      description:
        "Create the initial wireframe and mockups for the landing page.",
      status: "pending",
      priority: "high",
      dueDate: "2025-06-20",
    },
    {
      id: "4",
      title: "Set up CI/CD pipeline",
      description:
        "Configure GitHub Actions for automated testing and deployment.",
      status: "in-progress",
      priority: "medium",
      dueDate: "2025-06-18",
    },
  ];

 
  const [tasksState, setTaskState] = useState<Task[]>(() => {
    const storedTask = localStorage.getItem("tasks"); // Get the tasks stored in local storage
    if (storedTask) {
      return JSON.parse(storedTask);
    } else localStorage.setItem("tasks", JSON.stringify(tasks));
    return tasks;
  });

  //Function to update tasks in LocalStorage and also to set the state
  const updatedTasksState = (newTasks: Task[]) => {
    setTaskState(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  // Filter state for status and priority
  const [filter, setFilter] = useState({
    status: "all-statuses",
    priority: "all-priorities",
  });

  //State for searchInput
  const [searchTask, setSearchTask] = useState("");

  //Handler function to delete task by task by taskId
  const handleDelete = (taskId: string) => {
    const updatedTasks = tasksState.filter((task) => task.id !== taskId);
    updatedTasksState(updatedTasks);
  };

  //Handler function to update the task status 
  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    const updatedTasks: Task[] = tasksState.map((task) => {
      if (task.id === taskId) {
        return { ...task, status: newStatus };
      }
      return task;
    });
    updatedTasksState(updatedTasks);
  };

  // Filter tasks based on status, priority, and search keyword
  const filteredTasks = tasksState.filter((task) => {
    const statusMatch =
      filter.status === "all-statuses" || task.status === filter.status;
    const priorityMatch =
      filter.priority === "all-priorities" || task.priority === filter.priority;

    const searchMatch = task.title
      .toLowerCase()
      .includes(searchTask.toLowerCase());

    return statusMatch && priorityMatch && searchMatch;
  });

  // Handle change in filter options
  const handleFilterChange = (
    type: "status" | "priority",
    value: string
  ): void => {
    setFilter((prev) => ({ ...prev, [type]: value }));
  };

  //Handler to add new task to the list
  const handleAddTask = (newTask: Task) => {
    updatedTasksState([...tasksState, newTask]);
  };

  //Hnadler to search the task based on the string
  const handleSearch = (text: string) => {
    setSearchTask(text);
  };

  //track the state for sorting functionality
  const [sortTask, setSortTask] = useState("");
  //Handler function to perform sorting based on title
  const handleSort = () => {
    const sortedTasks = [...tasksState].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    updatedTasksState(sortedTasks);
  };

  return (
    <div>
      <h2 className="font-bold text-center text-3xl mb-6">Task Manager App</h2>
      <nav className="flex flex-row">
        <input
          className="basis-2/3 mb-4 object-cover border rounded mr-4"
          type="text"
          placeholder="Search tasks by title.."
          value={searchTask}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <button
          className="border rounded basis-1/3"
          onClick={() => handleSort()}
        >
          Sort by Title
        </button>
      </nav>
      {/* Call/render Taskfilter component */}
      <TaskFilter onFilterChange={handleFilterChange} />
      <div>
        {filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
        ))}
      </div>
      {/* Call TaskForm component to add new Task  */}
      <div>
        <TaskForm onAddTask={handleAddTask} />
      </div>
    </div>
  );
}
export default TaskList;
