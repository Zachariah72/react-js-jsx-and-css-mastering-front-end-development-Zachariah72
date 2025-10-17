import React from 'react';

/**
 * Button component
 * @param {string} variant - "primary", "secondary", or "danger"
 * @param {string} size - "sm", "md", "lg"
 * @param {function} onClick - click handler
 * @param {React.ReactNode} children - button content
 */
const Button = ({ variant = 'primary', size = 'md', onClick, children, ...props }) => {
  // Variant styles
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-500 text-white hover:bg-gray-600',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  // Size styles
  const sizeClasses = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      onClick={onClick}
      className={`${variantClasses[variant]} ${sizeClasses[size]} rounded transition-colors`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
