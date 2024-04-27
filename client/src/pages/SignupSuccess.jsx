import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const SignupSuccess = () => {
    const navigate = useNavigate()

    // useEffect(() => {
    //     const redirectTimeout = setTimeout(() => {
    //         navigate('/login')
    //     }, 2000)

    //     return () => {
    //         clearTimeout(redirectTimeout)
    //     }
    // }, [navigate])
    
    return (
        <>
            <div className="flex w-full h-full centered-col gap-y-8">
                <h2 className="text-2xl">Successfully Registered</h2>
                <p className="">validation email sent</p>
            </div>
        </>
    )
}

export default SignupSuccess