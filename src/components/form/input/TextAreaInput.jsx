import { useFormContext } from "@/hooks"

const TextAreaInput = ({ name, label }) => {
    const { formData, handleChange } = useFormContext()

    return ( 
        <label className="flex flex-col w-full gap-y-2 ">
            <span htmlFor="" className="relative w-full text-sm capitalize text-mid">{ label }</span>
            <textarea name={name} onChange={e => handleChange(e)} className="w-full py-2 capitalize border-b-4 outline-none easy-transition bg-deep text-silver border-b-mid/50 focus:border-b-indigo-700" ></textarea>
        </label>
     );
}
 
export default TextAreaInput;