const GET_USERS = 'users/GET_USERS'

const getUsers = (users) => ({
    type: GET_USERS,
    payload: users
})

export const getAllUsers = () => async (dispatch) => {
    const response = await fetch('/api/users/')

    if (response.ok) {
        const data = await response.json();
        dispatch(getUsers(data.users))
        return data
    }
    return response
}
//!moved to its own store.
// export const setSearchUsers = (users) => (dispatch) =>{
//     if(users){
//         dispatch(getUsers(users))
//     }
// }

export default function usersReducer(state = {}, action) {
    let newState;
    switch (action.type) {
        case GET_USERS:
            newState = {}
            action.payload.forEach((user) => {
                newState[user.id] = user
            });
            return newState
        default:
            return state
    }
}
