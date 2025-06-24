
import { useState } from "react";//Import react's useState hook
import type { TaskFormProp, Task } from "../../types"; //Importing prop for task
//Compoenent to add a new task to the task list
function TaskForm({ onAddTask }: TaskFormProp) {
  //Set state for each task properties
  const [form, setForm] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "medium",
    status: "pending",
  });
// Input handler for text/select inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

 // Update form state dynamically based on input field's name
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  // Form submission handler
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); //Prevent default form submit behaviour
    // Validate that due date is in the future
      if(form.dueDate && new Date(form.dueDate) < new Date()){
      alert("Please add a future date")
      return;
    }
    
    alert("Task is being added to the list");
    //Create a new task with the entered input values
    const newTask: Task = {
      id: Date.now().toString(),
      title: form.title,
      description: form.description,
      status: form.status,
      priority: form.priority,
      dueDate: form.dueDate,
    };
    //Call the onAddtask(callback) function in parent component by passing new task
    onAddTask(newTask);

    // Reset form fields to initial state everytime after adding the task
    setForm({
      title: "",
      description: "",
      dueDate: "",
      priority: "medium",
      status: "pending",
    });
  };

  return (
    <>
      {/* Task creation form */}
      <form onSubmit={handleSubmit}>
        <h3 className="font-bold mb-2">Add NewTask:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input className="p-2 border rounded"
            type="text"
            name="title"
            placeholder="Add Task title"
            value={form.title}
            onChange={handleChange}
            required
          />
          <input className="p-2 border rounded"
            type="text"
            name="description"
            placeholder="Add description"
            value={form.description}
            onChange={handleChange}
            required
          />
          <label htmlFor="priority" className="block font-medium mb-1">Priority:</label>
          <select className=" bg-gray-100 mr-4" name="priority" value={form.priority} onChange={handleChange}>
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
          <label htmlFor="status" className="block font-medium mb-1">Status:</label>
          <select className="bg-gray-100 mr-4" name="status" value={form.status} onChange={handleChange}>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In-Progress</option>
          </select>
          <label htmlFor="dueDate" className="block font-medium mb-1">Due Date:</label>
          <input
            type="date"
            name="dueDate"
            value={form.dueDate}
            onChange={handleChange}
          />
        </div>
        <div className="flex-row-reverse mt-8">
            <button  type="submit" className="rounded font-medium bg-teal-200 px-4 py-2">Add Task</button>
        </div>
      </form>
    </>
  );
}
export default TaskForm;
