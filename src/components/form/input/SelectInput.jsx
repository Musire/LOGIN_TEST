import { useFormContext } from "@/hooks"
import { v4 as uuidv4 } from "uuid"

const SelectInput = ({ name, label, options }) => {
    const { formData, handleSpecialChange } = useFormContext()

    const selectOptions = options?.map(option => <option value={option.id} key={uuidv4()}className="capitalize text-dark" >{option.name}</option>)

    return ( 
        <label className="flex flex-col w-full gap-y-2 ">
            <span htmlFor="" className="relative w-full text-sm capitalize text-mid">{ label }</span>
            <select 
                value={formData[name]} 
                defaultValue="" 
                autoComplete="off"
                onChange={e => handleSpecialChange(name, e.target.value )} 
                className="w-full py-2 capitalize border-b-4 outline-none easy-transition bg-deep text-silver border-b-mid/50 focus:border-b-indigo-700" >
                {selectOptions}
            </select>
        </label>
     );
}
 
export default SelectInput;