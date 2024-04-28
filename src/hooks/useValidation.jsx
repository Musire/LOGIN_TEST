import { useState } from "react"

const useValidation = ( validationRules, currentState ) => {

    const [ validationErrors, setValidationErrors] = useState({})

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
    }

    const validateAllFields = async () => {
        for (let rule in validationRules) {
            await validateField(rule, currentState[rule], validationRules)
        }
    }

    const handleBlur = (e) => {
        const { name, value } = e.target;
        validateField(name, value, validationRules)
    }


    return { validationErrors, handleBlur, validateAllFields };
}
 
export default useValidation;