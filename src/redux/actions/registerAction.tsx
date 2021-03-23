import * as registerActionTypes from '../actionTypes/registrationActionTypes';
export const addChange = (field:any,fieldValue:any) =>({
    type: registerActionTypes.ADD_CHANGE,
    payload:{
        field,
        fieldValue
    }
})
export const addError = (field:any) =>({
    type: registerActionTypes.ADD_ERROR,
    payload:{
        field
    }
})

export const removeError = (field:any) =>({
    type: registerActionTypes.REMOVE_ERROR,
    payload:{
        field
    }
})