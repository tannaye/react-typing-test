import { FC } from "react";
import "./index.css";
import { Controller } from "react-hook-form";

interface Props {
  control: object;
  name: string;
  id: string;
  label: string;
  isRequired: boolean;
  isDisabled: boolean;
  type: string;
  placeholder: string;
  errors: object;
  defaultValue: string;
}

const CustomInput: FC<Props> = ({
  control,
  name,
  id,
  label,
  isRequired,
  isDisabled = false,
  type,
  placeholder,
  errors,
  defaultValue,
}): JSX.Element => {
  return (
    <div className=" mb-5">
      <label className="text-sm font-medium black-text" htmlFor={id}>
        {label}
      </label>
      <div className="mt-1.5">
        <Controller
          //  @ts-ignore
          control={control}
          defaultValue={defaultValue}
          name={name}
          rules={{
            required: isRequired ? true : false,
          }}
          render={({ field: { onChange, value } }) => {
            return (
              <>
                <div className="d-flex align-items-center">
                  <input
                    autoComplete="off"
                    className={`form-input px-4 py-1.5 custom-input w-full black-text  ${
                      isDisabled ? "input-disabled" : ""
                    }`}
                    type={type}
                    value={value}
                    onChange={(val) => {
                      onChange(val);
                    }}
                    placeholder={placeholder}
                    disabled={isDisabled}
                    defaultValue={
                      type === "number" ? parseInt(defaultValue) : defaultValue
                    }
                  />
                </div>
              </>
            );
          }}
        />
        {/* @ts-ignore */}
        {errors[name] && (
          <div className="mt-2 error-text text-xs">
            {/* @ts-ignore */}
            {errors[name]["message"] ? (
              //  @ts-ignore
              <p>{errors[name]["message"]}</p>
            ) : (
              <p>{label ? label : name} is required.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

CustomInput.displayName = "CustomInput";

export default CustomInput;
