import { Link } from "react-router-dom"
import { FormProvider } from "@/contexts"
import { Form, FormBody, TextInput } from "@/components"
import { authBaseUrl } from "@/constants/Forms"
import { forgotPasswordFormData as formData } from "@/constants/FormData"

const ForgotPassword = () => {
  const rules = {}
  const handleUpdate = ( status, resData, error) => {
    console.log(resData)
  }

  return (
    <>
      <h2 className="text-2xl">Forgot Password</h2>
      <FormProvider
        initialFormData={formData}
        formRules={rules}
      >
        <Form
          url={`${authBaseUrl}/forgot-password`}
          request="post"
          handleUpdate={handleUpdate}
        >
          <FormBody>
            <TextInput 
              name="email"
              label="email"
            />
          </FormBody>
        </Form>
      </FormProvider>
      <div className="">
        <Link to="/login" className="text-indigo-300" >Back to Login</Link>
      </div>
    </>
  )
}

export default ForgotPassword