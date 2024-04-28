import axios from "axios"
import { useCallback, useState } from "react"

const useRequest = () => {
    const [resData, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(false)
    const [ status, setStatus ] = useState(null)

    const getRequest = useCallback(async (url, headers) => {
        try {
            setIsLoading(true)
            const response = await axios.get(url, headers)
            setData(() => response?.data);
            setStatus(() => response.status);
        } catch (error) {
            setError(error.response.data.error)
        } finally {
            setIsLoading(false)
        }
    }, [  ])

    const postRequest = useCallback(async (url, requestData, headers) => {
        try {
            setIsLoading(true)
            const response = await axios.post(url, requestData, headers)
            setData(() => response?.data);
            setStatus(() => response.status);
        } catch (error) {
            setError(error.response.data.error)
        } finally {
            setIsLoading(false)
        }
    }, [  ])

    const patchRequest = useCallback(async (url, requestData, headers) => {
        try {
            setIsLoading(true)
            const response =  await axios.patch(url, requestData, headers)
            setData(() => response?.data);
            setStatus(() => response.status);
        } catch (error) {
            setError(error.response.data.error)
        } finally {
            setIsLoading(false)
        }
    }, [  ])

    const deleteRequest = useCallback(async (url, headers) => {
        try {
            setIsLoading(true)
            const response =  await axios.delete(url, headers)
            setData(() => response?.data);
            setStatus(() => response.status);
        } catch (error) {
            setError(error.response.data.error)
        } finally {
            setIsLoading(false)
        }
    }, [  ])

    return { resData, isLoading, error, status, postRequest, getRequest, patchRequest, deleteRequest };
}
 
export default useRequest;