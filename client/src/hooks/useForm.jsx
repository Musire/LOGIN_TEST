import { useCallback, useState } from "react";

const useForm = ( initialFormData ) => {

    const [ formData, setFormData ] = useState( initialFormData )

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({...formData, [name] : value });
    };

    const handleSpecialChange = useCallback((name, value) => {
        setFormData(prev => ({...prev, [name]: value}))
    }, [setFormData])

    
    return { formData, handleChange, handleSpecialChange };
}
 
export default useForm;