const transactionReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION':
            return [action.payload, ...state]
        default:
            return state;
    };
}
export default transactionReducer;