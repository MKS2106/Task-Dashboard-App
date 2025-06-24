// Importing the TaskList component
import TaskList from "../TaskList/TaskList";
// Defining the Dashboard component
function Dashboard(){
    return(
        <div>
            {/* Rendering the TaskList component inside a <div> */}
            <TaskList/>
        </div>
    )
}
// Exporting the Dashboard component
export default Dashboard;