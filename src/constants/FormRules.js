
export const SignupRules = {
    email: {
        required: true,
        message: "email field required",
        pattern: /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/,
        invalidMessage: "not email recognized pattern"
    },
    password: {
        required: true, 
        message: "password field required",
        matchField: 'password2',
        matchError: 'passwords do not match'
        
    },
    password2: {
        required: true, 
        message: "password confirmation field required",
        matchField: 'password',
        matchError: 'passwords do not match'
    }
}