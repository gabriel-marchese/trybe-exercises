const INITIAL_STATE = { count: 0 };

const counterReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {
        case "INCREMENT_1":
            return { count: state.count + action.payload }

        default:
            return state;
    }
};

export default counterReducer;