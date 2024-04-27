import { useEffect } from "react"
import { useFormContext } from "@/hooks"
import { headers } from "@/constants/Forms"

const Form = ({ children, handleUpdate, url, request }) => {

    
    const { 
        validationErrors, 
        validateAllFields, 
        formData, 
        resData, 
        isLoading,
        error,
        status, 
        postRequest, 
        getRequest, 
        patchRequest, 
        deleteRequest,
        errorFreeValidation
    } = useFormContext()

    const requestType = {
        get: getRequest,
        post: postRequest,
        patch: patchRequest,
        delete: deleteRequest,
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await validateAllFields()

        if (!errorFreeValidation) console.log('errors', validationErrors)

        let selectedRequest = requestType[request]

        if (request === 'get' || request === 'delete') return await selectedRequest(url, headers)

        await selectedRequest( url, {...formData}, headers )
    }

    useEffect(() => {
        if (!isLoading && status) {
            handleUpdate(status, resData, error)
        }
    }, [ isLoading, status, resData, handleUpdate, error ])

    return (
        <form onSubmit={(e) => handleSubmit(e)} className="w-full h-[80vh] overflow-y-scroll scrollbar-none rounded-xl">
            { children }
        </form>
     );
}
 
export default Form;