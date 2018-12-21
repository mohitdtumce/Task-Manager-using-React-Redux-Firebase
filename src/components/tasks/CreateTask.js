import React, { Component } from 'react';
import { connect } from "react-redux";
import { createTask } from "../../store/actions/taskAction";

class CreateTask extends Component {
    state = {
        title: "",
        content: ""
    };

    handleSubmit = (input) => {
        input.preventDefault();
        // console.log(this.state);
        this.props.createTask(this.state)
    };

    handleChange = (input) => {
        this.setState({
            [input.target.id]: input.target.value
        });
    };

    render() {
        return (
            <div className="container s12 m6 center">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Create New Task</h5>
                    <div className="input-field">
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" onChange={this.handleChange}></input>
                    </div>
                    <div className="input-field">
                        <label htmlFor="content">Content</label>
                        <textarea className="materialize-textarea" id="content" onChange={this.handleChange}></textarea>
                    </div>
                    <div className="input-field">
                        <button className="btn orange lighten-1 z-depth-0">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createTask: (task) => dispatch(createTask(task))
    };
};
export default connect(null, mapDispatchToProps)(CreateTask);
