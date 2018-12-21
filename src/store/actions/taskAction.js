import * as constants from "../../constants";

export const createTask = (task) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // Perform async calls to Firebase
        const firestore = getFirestore();
        firestore.collection("tasks").add({
            ...task,
            authorFirstName: "Mohit",
            authorLastName: "Sharma",
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: constants.CREATE_TASK, payload: task })
        }).catch((err) => {
            dispatch({ type: constants.CREATE_TASK_ERROR, payload: err })
        })
    }
};

