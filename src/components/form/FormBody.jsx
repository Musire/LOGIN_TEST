import { useFormContext } from "@/hooks";

const FormBody = ({ children, ...props }) => {

    const {error} = useFormContext()
    const errorLess = (!error || (Object.entries(error).length === 0))
    return (
        <div className="flex flex-col w-full px-4 gap-y-8">
            <ul {...props}>
                { children }
            </ul>
            <span className="flex flex-col justify-end w-full gap-y-4 gap-x-8">
                <button type="submit" className="w-full text-xl capitalize bg-indigo-900 btn easy-transition hover:bg-indigo-800">submit</button>

                {errorLess? null : <span className="w-full py-2 text-red-400">{error}</span>}
            </span>
        </div>
     );
}
 
export default FormBody;