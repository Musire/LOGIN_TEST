import { Link, useLocation } from "react-router-dom"
import { FormProvider } from "@/contexts"
import { Form, FormBody, TextInput } from "@/components"
import { ResetPasswordFormData as formData } from "@/constants/FormData"
import { ResetPasswordRules as rules } from "@/constants/FormRules"
import { authDevUrl} from '@/constants/Forms'

const ResetPassword = () => {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const token = queryParams.get('token')

  const handleUpdate = ( status, resData, error) => {
    console.log(error)
  }

  return (
    <>
      <h2 className="text-2xl">Reset Password</h2>
      <FormProvider
        initialFormData={formData}
        formRules={rules}
      >
        <Form
          url={`${authDevUrl}/reset-password/?token=${token}`}
          request="post"
          handleUpdate={handleUpdate}
        >
          <FormBody
            className="flex flex-col gap-y-4"
          >
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
        <Link to="/" className="btn" >Home</Link>
      </div>
    </>
  )
}

export default ResetPassword