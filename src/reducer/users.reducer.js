

const initialState = {
   user : {},
   status : false
}
function userReducer(state = initialState, action) {
    switch (action.type) {
        case "LOG_IN":
            return {
                user : action.payload,
                status : true
            };
        case "LOG_OUT":
            return {
                user: {},
                status : false
            };
        default:
            return {
                user: {},
                status: false
            };
    }
}

export default userReducer;
