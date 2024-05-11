import React from "react";

// Define the Button component
const Button = ({
  variant = "primary",
  size = "medium",
  onClick,
  disabled = false,
  children,
  ...rest
}) => {
  // Define classes based on variant and size
  const buttonClasses = `btn btn-${variant} btn-${size}`;

  return (
    <button
      className="px-4 py-2 rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none"
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
