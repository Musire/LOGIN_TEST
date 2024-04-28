import { useContext } from "react"
import { FormContext } from "@/contexts"

const useFormContext = () => {
    const formContext = useContext(FormContext)
    if (formContext) return formContext
}

export default useFormContext