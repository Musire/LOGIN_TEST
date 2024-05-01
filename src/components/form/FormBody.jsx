import { AiOutlineLoading as Loading } from "react-icons/ai";
import { useFormContext } from "@/hooks";
import { IoCheckmarkOutline as Success } from "react-icons/io5";


const WaitingButton = () => {
    return (
        <button type="submit" className="w-full text-xl capitalize bg-indigo-900 btn easy-transition hover:bg-indigo-800">
            submit
        </button>
    )
}


const LoadingButton = () => {
    return (
        <button type="submit" disabled className="w-full px-3 py-2 text-xl capitalize bg-indigo-700 easy-transition centered disabled:cursor-not-allowed">
            <Loading size={30} className="animate-spin" />
        </button>
    )
}

const SuccessButton = () => {
    return (
        <button type="submit" disabled className="w-full px-3 py-2 text-xl capitalize bg-green-700 easy-transition centered disabled:cursor-not-allowed">
            <Success size={30}  />
        </button>
    )
}

const ErrorButton = () => {
    return (
        <button type="submit" className="w-full text-xl capitalize bg-red-900 btn easy-transition hover:bg-red-800">
            retry
        </button>
    )
}

const FormBody = ({ children, ...props }) => {

    const {error, isLoading, status} = useFormContext()
    const errorLess = (!error || (Object.entries(error).length === 0))

    return (
        <div className="flex flex-col w-full px-4 gap-y-8">
            <ul {...props}>
                { children }
            </ul>
            <span className="flex flex-col justify-end w-full gap-y-4 gap-x-8">
                { !isLoading && error && <ErrorButton />}
                { isLoading && <LoadingButton />}
                { !isLoading && !error && !status && <WaitingButton /> }
                { (status === 200) && <SuccessButton />  }
                {errorLess? null : <span className="w-full py-2 text-red-400">{error}</span>}
            </span>
        </div>
     );
}
 
export default FormBody;