// Importing prop types for the TaskFilter component
import type { TaskFilterProps } from "../../types";
// Component for filtering tasks by status and priority
function TaskFilter({ onFilterChange }: TaskFilterProps) {
  return (
    <div className="flex items-center space-x-6 mb-2">
      <label htmlFor = "Status" className="font-bold text-gray-600 mr-2">Status:</label>
      <div className="border border-gray-300 px-3 py-2 rounded">
        <select onChange={(e) => onFilterChange("status", e.target.value)}>
          {/* <select onChange={(e) => onFilterChange( console.log(e.target.status))}> */}
          <option value="all-statuses">All-Statuses</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In-Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
      <label htmlFor = "Priority" className="font-bold text-gray-600 mr-2">Priority:</label>
      <div className="border border-gray-300 px-3 py-2 rounded">
        <select onChange={(e) => onFilterChange("priority", e.target.value)}>
          <option value="all-priorities">All Priorities</option>
          <option value="high">High</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>
    </div>
  );
}
export default TaskFilter;
