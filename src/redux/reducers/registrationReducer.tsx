import * as registerActionTypes from '../actionTypes/registrationActionTypes';
type FormAction = {
    type: string;
    payload: {
        field: string;
        fieldValue: string;
    }
};
interface IRegiserState {
    BusinessName: String,
    OwnerName: String,
    userName:String,
    password:String,
    confirmPassword:String,
    registredPhone: String,
    alternatePhone: String,
    whatsupNumber: String,
    Category: String,
    subCategory: String,
    address: String,
    description: String,
    emailId: String,
    GST_Number: String,
    AccountName: String,
    IFSC_code: String,
    Branch: String,
    PaymentTerm: String,
}
export interface IErrorState {
    error_email: boolean;
    error_mobile: boolean;
    error_password:boolean;
    error_confirmPassword:boolean;
}
export const initialState: IRegiserState = {
    BusinessName: '',
    OwnerName: '',
    userName:'',
    password:'',
    confirmPassword:'',
    registredPhone: '',
    alternatePhone: '',
    whatsupNumber: '',
    Category: '',
    subCategory: '',
    address: '',
    description: '',
    emailId: '',
    GST_Number: '',
    AccountName: '',
    IFSC_code: '',
    Branch: '',
    PaymentTerm: '',
}
export const initialErrorState: IErrorState = {
    error_email: false,
    error_mobile: false,
    error_password:false,
    error_confirmPassword:false,
}

export const registrationReducer = (state: IRegiserState = initialState,
    action: FormAction) => {
    switch (action.type) {
        case registerActionTypes.ADD_CHANGE:
            return {
                ...state,
                [action.payload.field]: action.payload.fieldValue
            }
        case registerActionTypes.ADD_FILES:
            return{

            }
        case registerActionTypes.ADD_ERROR:
            return {
                ...state,
                [action.payload.field]: true
            }
        case registerActionTypes.REMOVE_ERROR:
            return {
                ...state,
                [action.payload.field]: false
            }
        default:
            return state;
    }
}

type FileAction ={
    type: string;
    payload: {
        field:string;
        fieldValue:any;
    }
};
export interface IFileState{
    GST_certificate:any,
        photo1:any,
        photo2:any,
        photo3:any
}
export const fileState: IFileState = {
    GST_certificate: '',
        photo1: '',
        photo2: '',
        photo3: ''
}
export const fileReducer = (
    state: IFileState = fileState,
    action: FileAction
): IFileState | any => {
    
    switch (action.type) {
        case registerActionTypes.ADD_FILES:
            console.log(action.payload.fieldValue);
            return{
                ...state,
                [action.payload.field]: action.payload.fieldValue
            }
        default:
            return state
    }
}