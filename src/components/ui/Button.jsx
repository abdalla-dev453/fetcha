const Button = ({
  children,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="
        bg-orange-500
        hover:bg-orange-600
        text-white
        px-5
        py-3
        rounded-lg
        font-medium
        transition
      "
    >
      {children}
    </button>
  );
}

export default Button;