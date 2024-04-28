import { useFormContext } from "@/hooks"

const TextInput = ({ className, ...props }) => {
    const { formData, handleChange, validationErrors, handleBlur } = useFormContext()

    return ( 
        <label {...className} className="flex flex-col w-full gap-y-2" >
            <span htmlFor={props.name} className="relative w-full text-sm capitalize text-mid" >{props.label}</span>
            <input
                {...props} 
                value={formData[props.name]}
                onChange={e => handleChange(e)}
                autoComplete="off"
                onBlur={(e) => handleBlur(e)}
                className="w-full py-2 border-b-4 outline-none easy-transition bg-deep text-silver border-b-mid/50 focus:border-b-indigo-700"
            />
            { validationErrors ? <p className="text-red-400" >{validationErrors[props.name]}</p> : null}
        </label>
     );
}
 
export default TextInput;