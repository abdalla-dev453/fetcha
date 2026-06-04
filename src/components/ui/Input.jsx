const Input = ({
  label,
  type = "text",
  placeholder,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-medium">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          border
          border-gray-300
          rounded-lg
          px-4
          py-3
          focus:outline-none
          focus:ring-2
          focus:ring-orange-500
        "
      />
    </div>
  );
        
}

export default Input;