import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {fetchUsers} from "../store/action-creators/user";
import {UserAction} from "../types/todo";
import {useActions} from "../hooks/useActions";

const UserList : React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        fetchUsers()
    }, [])


    if(loading){
        return <h1>Идет загрузка...</h1>
    }

    if(error){
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(user =>
                <div key={user.id}>{user.name}</div>)}
        </div>
    );
};

export default UserList;