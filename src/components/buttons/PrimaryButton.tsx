import React, { FC } from "react";

interface Props {
  title: string;
  style: object | {};
  onClick: any | null;
  loading: boolean | false;
  disabled: boolean | false;
}
const PrimaryButton: FC<Props> = (props): JSX.Element => {
  const {
    title,
    style = {},
    onClick,
    loading = false,
    disabled = false,
  } = props;
  return (
    <div>
      <button
        className={`btn bg-green ${
          (loading || disabled) && "opacity-50"
        } white-text text-sm py-3 w-full rounded`}
        type="submit"
        style={style}
        onClick={onClick}
        disabled={loading || disabled}
      >
        <div className="flex items-center justify-center">
          {loading && <i className="fa fa-spinner fa-pulse mr-2"></i>}
          {title}
        </div>
      </button>
    </div>
  );
};

export default PrimaryButton;
