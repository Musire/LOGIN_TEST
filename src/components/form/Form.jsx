import { useCallback, useEffect } from "react"
import { useFormContext } from "@/hooks"
import { headers } from "@/constants/Forms"

const Form = ({ children, handleUpdate, url, request }) => {
    
    const { 
        validateAllFields, 
        formData, 
        resData, 
        isLoading,
        error,
        status, 
        postRequest, 
        getRequest, 
        patchRequest, 
        deleteRequest
    } = useFormContext()

    const requestType = {
        get: getRequest,
        post: postRequest,
        patch: patchRequest,
        delete: deleteRequest,
    }

    const selectedRequest = requestType[request]

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formErrors = await validateAllFields()
        if ((Object.keys(formErrors).length === 0)) {
            if (request === 'get' || request === 'delete') {
                await selectedRequest(url, headers)
            }
    
            await selectedRequest( url, {...formData}, headers )
        }
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