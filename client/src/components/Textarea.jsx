const Textarea = (props) => {
  const { label, placeholder, value, onChange } = props;

  return (
    <div className="w-full">
      <div className="text-xs text-darkgray">{label}</div>
      <div className="mt-2.5">
         <textarea
          defaultValue={value}
          rows={5}
          placeholder={placeholder}
          onChange={onChange}
          className={`w-full border-none text-light focus:outline-none outline-none bg-dark py-4 'px-4'`}
        />
        
      </div>
    </div>
  )
};

export default Textarea;