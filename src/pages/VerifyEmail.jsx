import { Button } from '@/components'
import { useLocation, useNavigate } from 'react-router-dom'
import { useRequest } from "@/hooks"
import { headers, authBaseUrl } from "@/constants/Forms"
import { useEffect } from 'react'

const VerifyEmail = () => {
    const { getRequest, resData, isLoading, error, status } = useRequest()
    const navigate = useNavigate()
    const location = useLocation()
    const queryParams = new URLSearchParams(location.search)
    const token = queryParams.get('token')
    
    const validate = () => {
        getRequest(`${authBaseUrl}/verify-email/?token=${token}`, headers)
    }

    useEffect(() => {
        if (status === 200) {
            navigate('/login')
        }
    }, [status, navigate])

    return (
        <>
            <h2 className="text-4xl">Verify your account</h2>
            <h4 className="text-2xl text-mid">almost there last step to go!</h4>
            <Button onClick={validate} className="btn" >Validate Account</Button>
        </>
    )
}

export default VerifyEmail