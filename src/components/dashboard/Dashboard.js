import React, { Component } from "react";

// Importing Sub-components
import Notifications from "./Notifications";
import TasksList from "../tasks/TasksList";

class Dashboard extends Component {
    render () {
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <TasksList />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}

export default Dashboard;