import { createContext } from "react";
import { useForm, useRequest, useValidation } from "../hooks";

export const FormContext = createContext()

export const FormProvider = ({ children, initialFormData, formRules }) => {

    const { 
        formData, 
        handleChange, 
        handleSpecialChange, 
        handleSingle 
    } = useForm(initialFormData)

    const { 
        validationErrors, 
        validateAllFields, 
        handleBlur
    } = useValidation(formRules, formData)

    const { 
        resData, 
        isLoading, 
        error, 
        status, 
        postRequest, 
        getRequest, 
        patchRequest, 
        deleteRequest 
    } = useRequest()

    const errorFreeValidation = (Object.keys(validationErrors).length === 0)
    
    const formContext = { 
        formData, 
        handleChange, 
        handleSpecialChange, 
        handleSingle, 
        validationErrors, 
        validateAllFields, 
        handleBlur, 
        resData, 
        isLoading, 
        error, 
        status, 
        postRequest, 
        getRequest, 
        patchRequest, 
        deleteRequest, 
        errorFreeValidation 
    }
    
    return <FormContext.Provider value={formContext}>{ children }</FormContext.Provider>
}
