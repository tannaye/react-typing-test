import { FC, useState } from "react";
import "./index.css";
import { Controller } from "react-hook-form";

interface Props {
  control: object;
  name: string;
  id: string;
  label: string;
  isRequired: boolean;
  isDisabled: boolean;
  placeholder: string;
  errors: object;
  defaultValue: string;
}

const CustomTextarea: FC<Props> = ({
  control,
  name,
  id,
  label,
  isRequired,
  isDisabled = false,
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
          render={({ field: { onChange, value } }) => (
            <>
              <div className="d-flex align-items-center">
                <textarea
                  autoComplete="off"
                  className="form-input px-4 py-1.5 custom-input w-full black-text"
                  value={value}
                  onChange={(val) => {
                    onChange(val);
                  }}
                  rows={6}
                  placeholder={placeholder}
                  disabled={isDisabled}
                  defaultValue={defaultValue}
                />
              </div>
            </>
          )}
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

export default CustomTextarea;
