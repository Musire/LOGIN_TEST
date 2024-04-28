import { Link, useNavigate } from "react-router-dom"
import { FormProvider } from "@/contexts"
import { Form, FormBody, TextInput } from "@/components"
import { SignupFormData as formData } from "@/constants/FormData"
import { useCentral } from "@/hooks"
import { useEffect } from "react"

const Signup = () => {
  const {  updateAccessToken, updateRefreshToken, login } = useCentral()
  const authBaseUrl = import.meta.env.VITE_BASE_URL
  const navigate = useNavigate()
  const rules = {}
  
  const handleUpdate = (status, resData, error) => {
    if (status === 200) {
      navigate('/signup-success')
    }
  }

  useEffect(() => {
    console.log('effect fired!!!')
    const accessToken = localStorage.getItem('access-token')
    if (!accessToken) return
    login()
    navigate('/')
} , [login, navigate])

  return (
    <>
      <h2 className="text-2xl">Signup Page</h2>
      <FormProvider
        initialFormData={formData}
        formRules={rules}
      >
        <Form
          request="post"
          url={`${authBaseUrl}/register`}
          handleUpdate={handleUpdate}
        >
          <FormBody
            className="flex flex-col gap-y-4"
          >
            <TextInput 
              name="email"
              label="email"
            />
            <TextInput 
              name="password"
              label="password"
              type="password"
            />
            <TextInput 
              name="password2"
              label="confirm password"
              type="password"
            />
          </FormBody>
        </Form>
      </FormProvider>
      <div className="">
        <span className="">
          Already a member?
          <Link to="/login" className="ml-2 text-indigo-300" >Login</Link>
        </span>
      </div>
    </>
  )
}

export default Signup