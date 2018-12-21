import React, { Component } from "react";
import { connect } from "react-redux";

// Importing Sub-components
import Notifications from "./Notifications";
import TasksList from "../tasks/TasksList";

class Dashboard extends Component {
    render() {
        const { tasks } = this.props;
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <TasksList tasks={tasks} />
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications />
                    </div>
                </div>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        tasks: state.tasks.tasks
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addInput: (input) => {
//             dispatch(addInput(input));
//         },
//         calculateResult: () => {
//             dispatch(calculateResult());
//         }
//     };
// };

export default connect(mapStateToProps)(Dashboard);