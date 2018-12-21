import React from "react";

// Import Sub-components
import TaskSummary from "./TaskSummary";

const TasksList = ({ tasks }) => {
    return (
        <div className="task-list section">
            {tasks && tasks.map(task => {
                return <TaskSummary task={task} key={task.id} />
            })}
        </div>
    );
}

export default TasksList;