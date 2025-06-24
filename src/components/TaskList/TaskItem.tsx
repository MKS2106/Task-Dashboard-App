//Import props from types interface
import type { TaskItemProps, TaskStatus } from "../../types";

// Function/component to render individual task items
function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {
  return (
    <div className="border border-black-300 rounded mb-4">
      {/* <h2>Task Items</h2> */}
      <div>
        <div className=" flex font-bold text-blue-600 mx-2">{task.title}</div>
        <div className="flex text-gray-600 mx-2">{task.description}</div>
        <div className="flex space-x-6 text-sm text-gray-600 mx-2">
          {/* Conditional styling based on task priority */}
          <div
            className={
              task.priority === "low"
                ? "text-green-700"
                : task.priority === "medium"
                ? "text-yellow-800"
                : "text-red-500"
            }
          >
            Priority: {task.priority}
          </div>
          <div className="text-gray-500">Due Date: {task.dueDate}</div>
        </div>
      </div>
      {/* Status dropdown and delete button */}
      <div>
        {/* Dropdown to change the task's status */}
        <select value = {task.status} className="bg-gray-100 border border-stone-400" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onStatusChange(task.id, e.target.value)}>
        
          <option style={{ color: "brown" }} value="pending">
            Pending
          </option>
          <option style={{ color: "purple" }} value="in-progress">
            In Progress
          </option>
          <option style={{ color: "green" }} className="text-green" value="completed">
            Completed
          </option>
        </select>
        {/* Button to delete the task */}
        <button
          className="ml-2 border font-medium border-red-800 text-red-500 bg-gray-100"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default TaskItem;
