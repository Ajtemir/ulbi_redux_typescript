
enum UserActionType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",

}

interface UserState {
    users: any[];
    loading: boolean;
    error: null | string,

}

interface FetchUsersAction extends UserAction<null>{
    type: UserActionType.FETCH_USERS,
}
interface FetchUsersSuccessAction extends UserAction<any[]>{
    type: UserActionType.FETCH_USERS_SUCCESS,
}
interface FetchUsersErrorAction extends UserAction<string> {
    type: UserActionType.FETCH_USERS_ERROR,
}

interface UserAction<T> {
    type: UserActionType;
    payload?: T;
}

const initialState = {
    users:[],
    loading: false,
    error: null
}

export const userReducer = (state:UserState = initialState, action: UserAction<any>): UserState  => {
    switch (action.type){
        case UserActionType.FETCH_USERS:
            return {loading: true, error: null, users:[]}
        case UserActionType.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users:action.payload}
        case UserActionType.FETCH_USERS_ERROR:
            return {loading: false, error: action.payload, users:[]}
        default:
            return state

    }
}