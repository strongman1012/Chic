import { useRef } from "react";

const Input = (props) => {
  const { label, inputtype, placeholder, leadingIcon, value, onChange } = props;

  const fileUploadRef = useRef(null);

  const handleUpload = () => {
    fileUploadRef && fileUploadRef.current.click();
  }

  return (
    <div className="w-full">
      <div className="text-xs text-darkgray">{label}</div>
      <div className="relative mt-2.5">
        {leadingIcon && <img className="absolute top-3 bottom-3 my-auto left-3" src={leadingIcon} />}
        {label &&
          <input
            type={inputtype}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={`w-full border-none text-light focus:outline-none outline-none bg-dark py-3 ${leadingIcon ? "pr-4 pl-14" : 'px-3'}`}
          />
        }
        {!label &&
          <>
            <input type="file" className="hidden" id="upload" ref={fileUploadRef} />

            <div onClick={handleUpload} className={`w-full border-none text-[rgb(107,114,128)] focus:outline-none outline-none bg-dark py-3 ${leadingIcon ? "pr-4 pl-14" : 'px-3'}`}>
              {placeholder}
            </div>
          </>
        }
      </div>
    </div>
  )
};

export default Input;