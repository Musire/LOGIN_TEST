import { useState } from "react"

const useValidation = ( validationRules, currentState ) => {

    const [ validationErrors, setValidationErrors] = useState({})

    const errorFreeValidation = (Object.keys(validationErrors).length === 0)

    const validateField = async (name, value, rulesToValidate) => {

        let rules = rulesToValidate[name] || []
        let errorMsg = ""

        if (rules.required && !value) {
            errorMsg = rules.message
        }

        if (rules.pattern && !rules.pattern.test(value)) {
            errorMsg = rules.invalidMessage
        }

        if (rules.matchField && (currentState[rules.matchField] !== value)) {
            errorMsg = rules.matchError
        }

        setValidationErrors(prev => {

            let appendedError = {...prev, [name]: errorMsg}
            
            let prunedError = {...prev}
            if (Object.keys(prunedError).includes(name)) {
                delete prunedError[name]
            }

            return (errorMsg) ? appendedError : prunedError
        })

        return { [name]: errorMsg }
    }

    const validateAllFields = async () => {
        let allErrors = {}
        for (let rule in validationRules) {
            const error = await validateField(rule, currentState[rule], validationRules)
            const [[key, value]] = Object.entries(error)
            if (value) allErrors = {...allErrors, ...error}
        }
        return allErrors
    }

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value, validationRules)
    }



    return { validationErrors, handleBlur, validateAllFields, errorFreeValidation };
}
 
export default useValidation;