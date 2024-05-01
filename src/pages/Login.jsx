import { Link, Navigate, useNavigate } from "react-router-dom"
import { FormProvider } from "@/contexts"
import { Form, FormBody, TextInput } from "@/components"
import { LoginFormData as formData } from "@/constants/FormData"
import { useCentral } from "@/hooks"
import { useEffect } from "react"

const Login = () => {
  const {  updateAccessToken, updateRefreshToken, login } = useCentral()
  const navigate = useNavigate()
  const authBaseUrl = import.meta.env.VITE_BASE_URL
  const rules = {}

  useEffect(() => {
    const accessToken = localStorage.getItem('access-token')
    if (!accessToken) return
    login()
    navigate('/')
} , [login, navigate])

  const handleUpdate = ( status, resData, error ) => {
    if (status === 200) {
      console.log(resData)

      updateAccessToken(resData.accessToken)
      updateRefreshToken(resData.refreshToken)
      login()
      navigate('/')
      
    }
  }
  
  return (
    <>
      <h2 className="text-2xl">Login Page</h2>
      <FormProvider  
        initialFormData={formData}
        formRules={rules}
      >
        <Form
          handleUpdate={handleUpdate}
          url={`${authBaseUrl}/login`}
          request="post"
        >
          <FormBody
            className="flex flex-col gap-y-4"
          >
            <TextInput 
              name='email'
              label='email'
            />
            <TextInput 
              name='password'
              label='password'
              type='password'
            />
          </FormBody>
        </Form>
      </FormProvider>
      <div className="flex flex-col gap-y-4">
        <Link to="/forgot-password" className="text-indigo-300">Forgot password?</Link>
        <span className="">New to the Platform ? <Link to="/signup" className="text-indigo-300">Get started!</Link></span>
      </div>
    </>
  )
}

export default Login