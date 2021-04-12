import axios from 'axios';
import { AnyAction, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import * as userActionTypes from '../actionTypes/userActionTypes';

type ThunkResult<R> = ThunkAction<any, {}, undefined, AnyAction>;
export const logIn =(userObj):ThunkResult<void> =>{
    return async(dispatch:Dispatch) =>{
        try{
            const res = await axios.post('https://demo.smartstorez.com/ourgeniedemo/tempapi/user-login/',userObj);
            if(res.data.statusMessage === "success"){
               //dispatch({type:userActionTypes.ADD_USER,payload:res.data.result[0][0]})
                localStorage.setItem("user_name",res.data.result[0][0].first_name + res.data.result[0][0].last_name);
                localStorage.setItem("mobile_no",res.data.result[0][0].mobile_no);
               window.location.href="/userProfile"
            }
            if(res.data.statusMessage === "failed"){
               dispatch({type:userActionTypes.ADD_LOG_ALERT,error_message:res.data.result.error_message})
            }
        }
        catch(err){

        }
    }
}
export const removeAlert =() =>({
    type:userActionTypes.REMOVE_LOG_ALERT
})
export const logOut = ()=>({
    type:userActionTypes.LOG_OUT
})
export const getUser = ()=>({
    type:userActionTypes.GET_USER
})