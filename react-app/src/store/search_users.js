const SET_USERS = '/search_users/SET_USERS'


const getUsers = (users) =>({
    type:SET_USERS,
    payload: users
})



export const setSearchUsers = (users) => (dispatch) =>{
    if(users){
        dispatch(getUsers(users))
    }
}



export default function searchUserReducer(state = {}, action){
    let newState;
    switch (action.type) {
        case SET_USERS:
            newState = {}
            action.payload.forEach((user) => {
                newState[user.id] = user
            });
            return newState
        default:
          return state;
      }

}
