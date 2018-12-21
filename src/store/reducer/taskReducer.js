import * as constants from "../../constants";
const INITIAL_STATE = {
    tasks: [
        { id: 1, title: "Predicting price of cryptocurrency", content: "Executed Long Short Term Memory (LSTM) and Gated Recurrent Units (GRU) to predict price of cryptocurrency. Determined closing price of cryptocurrency for 30 days with mean absolute error percentage 7.37%." },
        { id: 2, title: "Credit Risk Modelling using Extreme Gradient Boosting", content: "Implemented Extreme Gradient Boosting in Python to predict probability of default of customer with 87.13% accuracy. Envisaged potential improvement in risk management & superior oversight of banking organizations" },
        { id: 3, title: "Dino - A Virtual Assistant for Windows", content: "Worked in a team of two and created a C# based fully functional animated virtual assistant which can interact with user through its self-triggered actions" },
        { id: 4, title: "Intrusion Detection System (IDS)", content: "Implemented Artificial Neural Network (ANN) based IDS model in MATLAB to detect and classify malicious attacks based on access level. Employed feedforward and back propagation algorithms along with various other optimization techniques to minimize overall computational overhead, and achieved and accuracy of over 89%" },
    ]
};

const taskReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case constants.CREATE_TASK:
        console.log(constants.CREATE_TASK, action.payload);
            break;
        case constants.CREATE_TASK_ERROR:
            console.log(constants.CREATE_TASK_ERROR, action.payload);
            break;
        default:
            break;
    }
    return state;
};

export default taskReducer;
