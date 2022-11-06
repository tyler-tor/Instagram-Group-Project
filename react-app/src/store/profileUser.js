const GET_PROFILE_USER = 'profileUser/GET_PROFILE_USER'

const getProfileUserAction = (user) =>({
    type:GET_PROFILE_USER,
    payload: user
})


export const getProfileUser = (id) => async dispatch =>{
    const response = await fetch(`/api/users/${id}`)
    if(response.ok){
        const data = await response.json();
        console.log('data', data)
        dispatch(getProfileUserAction(data))
        return data
    }
}


export default function profileUserReducer(state={}, action) {
    let newState;
    switch (action.type) {
        case GET_PROFILE_USER:
            newState = {}

            newState = {...action.payload}

            return newState
        default:
            return state
    }


}
