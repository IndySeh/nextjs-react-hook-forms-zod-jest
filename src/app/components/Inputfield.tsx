import { InputFieldProps, FormDataProps } from "@/lib/types";
import { FC } from "react";

const InputField: FC<InputFieldProps<FormDataProps>> = ({
  type,
  placeholder,
  name,
  register,
  error,
  valueAsNumber,
}) => {
  return (
    <>
      <input
        // style={{backgroundColor: "#0d0d0e"}}
        className="border focus:outline-none border-gray-700 p-2 rounded-lg  w-72 text-zinc-50 tracking-wide placeholder:text-zinc-300 bg-neutral-950"
        // autoComplete="off"
        type={type}
        placeholder={placeholder}
        {...register(name, {required: true})}
      />
      {error && <span className="text-xs my-1 text-red-500">{error.message}</span>}
    </>
  );
};

export default InputField;
